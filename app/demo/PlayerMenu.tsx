import { ITEM_TYPES, MOVE_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import { ActivePlayer } from '../Types/ActivePlayer'
import { Dialogue, Response } from '../Types/Dialogue'
import { Room } from '../Types/Room'
import { Player } from '../Types/Player'

interface PlayerMenuProps{
  Player: ActivePlayer,
  data: any,
  updateRoom: any,
  currentResponse?: Response,
  dial: Dialogue,
  room: Room
}


export default function PlayerMenu({Player, data, updateRoom, currentResponse, dial, room}: PlayerMenuProps) {

const [selectMenu, setSelectMenu] = useState("base")
const [list, setList] = useState<string[]>([])
const [menuFocus, setMenuFocus] = useState("none")
const [focusedItem, setFocusedItem] = useState<{displayName: string; description: string}>()
const basePage = [0,3]
const [pagination, setPagination] = useState(basePage)

const prepareRoomUpdate = (roomId: string, roomState: string, dialogueId: string, promptId: string) =>{
    const newAdventureInstance = data.adventureInstance;
    newAdventureInstance.roomId = roomId;
    newAdventureInstance.roomState = roomState;
    newAdventureInstance.dialogueId = dialogueId;
    newAdventureInstance.promptId = promptId;
    console.log(newAdventureInstance)
    updateRoom(newAdventureInstance)
}

const updateMenu = (destination: string) => {
  if (destination === selectMenu)
  return

  setPagination(basePage)
  if (destination === "action"){
    setList(Player.moves)
  } else if (destination === "item"){
    setList(Player.inventory)
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
    item = data.allyList.find((a: Player)=> a.name == name)
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
            <p className=''>{Player.name}</p>

                  <div>
                      <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
                        Health: {Player.playerState.hp}
                      </p>
                  </div>

            <div className='grid grid-cols-2 gap-1'>
                  <div>
                    <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
                        Sparking: {Player.playerState.sparkingMeter}
                      </p>
                  </div>


                  <div>
                    <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
                    {Player.archetype} Counter: {Player.playerState.archCounter}
                      </p>
                  </div>
            </div>

            <div className='grid grid-cols-3 gap-1 min-h-36'>
            {
              data.adventureInstance.roomState == "start" &&
              <>
                <div className='grid grid-rows-3 col-span-2'>
                  <div className='grid grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 gap-1'>
                      {currentResponse?.responses.map((r:any, index:number) => (
                        // (roomId: string, roomState: string, dialogueId: string, promptId: string, responseId: string)
                        <button onClick={()=>prepareRoomUpdate(room?.id, data.adventureInstance.roomState, data.adventureInstance.dialogueId, r.split('|')[1])} key={index} className='bg-blue-200 rounded hover:text-white'>{r.split('|')[0]}--{r.split('|')[1]}</button>
                      ))}
                    </div>
                    <div>
                      <div>{dial?.promptData.map((r:any, index:number) => (
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
  
            { data.adventureInstance.roomState == "battle" &&
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
                    {Player.moves.map((move:any, index:number) => (
                      (index >= pagination[0] && index <= pagination[1]) &&
                      <MenuButton key={index} content={move} number={index}/>
                    ))}
                    {[...Array(Player.moves.length > pagination[0] && Player.moves.length < pagination[1] ? 4 -  (Player.moves.length % 4)  : 0 )].map((_, index) => (
                      <div key={index} className="bg-neutral-400 rounded"></div>
                    ))}
                  </>
                  }
                  {selectMenu === "item" && 
                  <>
                    {Player.inventory.map((item:any, index:number) => (
                      (index >= pagination[0] && index <= pagination[1]) &&
                      <MenuButton key={index} content={item} number={index}/>
                      ))}
                      {[...Array(Player.inventory.length > pagination[0] && Player.inventory.length < pagination[1] ? 4 -  (Player.inventory.length % 4)  : 0 )].map((_, index) => (
                      <div key={index} className="bg-neutral-400 rounded"></div>
                    ))}
                  </>
                  }
                  {selectMenu === "ally" && 
                  <>
                    {data.adventureInstance.players.map((ally:any, index:number) => (
                      Player.name!= ally && <MenuButton key={index} content={ally} number={index}/>
                    ))}
                    {[...Array(5 - data.adventureInstance.players.length)].map((_, index) => (
                      <div key={index} className="bg-neutral-400 rounded"></div>
                    ))}
                  </>
                  }
                </div>
              </div>
              <div className='grid grid-cols-subgrid'>
                {selectMenu != "base" && selectMenu != "ally" &&
                  <div className='grid grid-cols-3 grid-rows-1 gap-1 mt-1'>
                    <button onClick={() => updatePagination(-4, list.length)} className={"rounded px-2 py-1 " + (pagination[0] == 0 ? "bg-neutral-400 hover:cursor-default" : "bg-blue-400" )}>{`<`}</button>
                    <div className='bg-blue-300 rounded px-2 py-1'>Page: {(pagination[1] +1)/4}</div>
                    <button onClick={() => updatePagination(4, list.length)} className={"rounded px-2 py-1 " + (pagination[1] > list.length ? "bg-neutral-400 hover:cursor-default" : "bg-blue-400" )}>{`>`}</button>
                  </div>
                }
              </div>
            </div>}

            {menuFocus != "none" && 
              <div className='grid grid-rows-3 col-span-2'>
                  
                    {focusedItem ? 
                    (<div className='grid grid-cols-subgrid row-span-2'>
                      {/* {focusedItem.displayName}
                    {focusedItem.displayName ? 
                      (<p>{focusedItem.displayName}</p>) : (
                        <p>{focusedItem.name}</p>
                      )
                    } */}
                      <p className='text-xs'>{focusedItem.description}</p>
                    </div>) : (
                      <div className='grid grid-cols-subgrid row-span-2 col-span-2'>
                        <p>Error</p>
                      </div>
                    )
                    }
                    <div className='grid grid-cols-3 grid-rows-1 gap-1 mt-1'>
                      <button className='bg-blue-300 rounded hover:text-white'>OPT1</button>
                      <button className='bg-blue-300 rounded hover:text-white'>OPT2</button>
                      <button className='bg-blue-300 rounded hover:text-white'>OPT3</button>
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
