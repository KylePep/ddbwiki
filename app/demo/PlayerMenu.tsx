import { ITEM_TYPES, MOVE_TYPES } from '@/shared/constants'
import React, { useState } from 'react'

interface PlayerMenuProps{
  Player: any,
  data: any,
  updateRoom: any,
  currentResponse: any,
  dial: any,
  room: any
}


export default function PlayerMenu({Player, data, updateRoom, currentResponse, dial, room}: PlayerMenuProps) {

const [selectMenu, setSelectMenu] = useState("base")
const [list, setList] = useState<string[]>([])
const [menuFocus, setMenuFocus] = useState("none")
const [focusedItem, setFocusedItem] = useState<{displayName: string; description: string}>()
const basePage = [0,3]
const [pagination, setPagination] = useState(basePage)

const updateMenu = (destination: string) => {
  if (destination === selectMenu)
  return

  setPagination(basePage)
  if (destination === "action"){
    setList(Player.base.moves)
  } else if (destination === "item"){
    setList(Player.base.inventory)
  } else {
    setList(data.adventureInstance.players)
  }
  setSelectMenu(destination)
}

const updatePagination = (change: number, listLength: number) => {
  let newPagination = [...pagination]

  newPagination[0] += change
  if (newPagination[0] < 0 || newPagination[0] > listLength) 
    return
  newPagination[1] += change
  setPagination(newPagination)
  console.log(newPagination, pagination)
}

const getFocusedItem = (name:string) =>{
  let item 
  if (selectMenu === "action"){
    item = MOVE_TYPES.find((m) => m.name == name)
  } else if (selectMenu === "item"){
    item = ITEM_TYPES.find((i) => i.name == name)
  } else {
    item = {displayName: name, description: 'ally'}

  }
  setFocusedItem(item)
  setMenuFocus(name)
}

function MenuButton ({content, number}: {content: string, number: number}){
  return(
    <>
    <button onClick={()=>getFocusedItem(content)} className='bg-blue-300 rounded px-2 py-1 hover:text-white'>
      {content}
    </button>
    </>
  )
}


  return (
      <>
            <p className=''>{Player.base.name}</p>

                  <div>
                      <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                        Health: {Player.hp}
                      </p>
                  </div>

            <div className='grid grid-cols-2 gap-1'>
                  <div>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                        Sparking: {Player.sparkingMeter}
                      </p>
                  </div>


                  <div>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                    {Player.base.archetype} Counter: {Player.archCounter}
                      </p>
                  </div>
            </div>

            <div className='grid grid-cols-3 gap-1 min-h-36'>
            {
              data.adventureInstance.roomsProgress == "start" &&
              <>
                <div className='grid grid-rows-3 col-span-2'>
                  <div className='grid grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 gap-1'>
                      {currentResponse?.responses.map((r, index) => (
                        <button onClick={()=>updateRoom(room?.id, dial?.id, r.split('|')[1])} key={index} className='bg-blue-200 rounded hover:text-white'>{r.split('|')[0]}--{r.split('|')[1]}</button>
                      ))}
                    </div>
                    <div>
                      <div>{dial?.chapterData.map((r, index) => (
                          <span key={index}>{r.id} </span>
                        ))}
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 gap-1'>
                  <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD1</button>
                  <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD2</button>
                  <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD3</button>
              </div>
              </>
            }
  
            { data.adventureInstance.roomsProgress == "battle" &&
            <>
            { menuFocus === "none" &&          
            <div className='grid grid-rows-3 col-span-2'>
              <div className='grid grid-cols-subgrid row-span-2'>
                <div className='grid  grid-cols-2 grid-rows-2 gap-1'>
                  {selectMenu === "base" && 
                  <>
                  <div className='col-span-2 row-span-2'>
                    <p>What will you do?</p>
                  </div>
                </>
                  }
                  {selectMenu === "action" && 
                    <>
                    {Player.base.moves.map((move, index) => (
                      (index >= pagination[0] && index <= pagination[1]) &&
                      <MenuButton key={index} content={move} number={index}/>
                    ))}
                    {[...Array(Player.base.moves.length > pagination[0] && Player.base.moves.length < pagination[1] ? 4 -  (Player.base.moves.length % 4)  : 0 )].map((_, index) => (
                      <div key={index} className="bg-gray-200 rounded"></div>
                    ))}
                  </>
                  }
                  {selectMenu === "item" && 
                  <>
                    {Player.base.inventory.map((item, index) => (
                      (index >= pagination[0] && index <= pagination[1]) &&
                      <MenuButton key={index} content={item} number={index}/>
                      ))}
                      {[...Array(Player.base.inventory.length > pagination[0] && Player.base.inventory.length < pagination[1] ? 4 -  (Player.base.inventory.length % 4)  : 0 )].map((_, index) => (
                      <div key={index} className="bg-gray-200 rounded"></div>
                    ))}
                  </>
                  }
                  {selectMenu === "ally" && 
                  <>
                    {data.adventureInstance.players.map((ally, index) => (
                      Player.base.name!= ally && <MenuButton key={index} content={ally} number={index}/>
                    ))}
                    {[...Array(5 - data.adventureInstance.players.length)].map((_, index) => (
                      <div key={index} className="bg-gray-200 rounded"></div>
                    ))}
                  </>
                  }
                </div>
              </div>
              <div className='grid grid-cols-subgrid'>
                {selectMenu != "base" && selectMenu != "ally" &&
                  <div className='grid grid-cols-3 grid-rows-1'>
                    <button onClick={() => updatePagination(-4, list.length)} className={"rounded px-2 py-1 " + (pagination[0] == 0 ? "bg-gray-400 hover:cursor-default" : "bg-blue-400" )}>{`<`}</button>
                    <div className='bg-blue-300 rounded px-2 py-1'>Page: {(pagination[1] +1)/4}</div>
                    <button onClick={() => updatePagination(4, list.length)} className={"rounded px-2 py-1 " + (pagination[1] > list.length ? "bg-gray-400 hover:cursor-default" : "bg-blue-400" )}>{`>`}</button>
                  </div>
                }
              </div>
            </div>}

            {menuFocus != "none" && 
              <div className='grid grid-rows-3 col-span-2'>
                <div className='grid grid-cols-subgrid row-span-2 col-span-2'>
                    {focusedItem && <>
                      <p>
                      {focusedItem.displayName}
                      </p>
                      <p>
                      {focusedItem.description}
                      </p>
                    </>
                    }

                </div>
              </div>
            }


              <div className='grid grid-cols-1 gap-1'>
                  { menuFocus === "none" &&
                  <>
                  {selectMenu != "action" ? <button onClick={() => updateMenu("action")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>ACTIONS</button> : <button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}
                  
                  {selectMenu != "item" ? <button onClick={() => updateMenu("item")} className='bg-blue-400 px-2 py-1 rounded hover:text-white'>ITEMS</button> :<button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}
                  
                  {selectMenu != "ally" ? <button onClick={() => updateMenu("ally")} className='bg-blue-400 px-2 py-1 rounded hover:text-white'>ALLIES</button> : <button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}
                  </>
                  }
                  { menuFocus !== "none" &&
                  <>
                  <button onClick={()=>setMenuFocus("none")} className='bg-blue-400 rounded px-2 py-1 hover:text-white'>RETURN</button>
                  <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>USE</button>
                  <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>OPTION</button>
                  </>
                  }
              </div>
              </>
              }
            </div>
      </>
    )
}