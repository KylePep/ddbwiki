'use client'
import { DEMO_DATA, ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'

const data = DEMO_DATA

const boss = () => {
  const base = ENEMY_TYPES.find((b)=>b.name === data.adventureInstance.enemyData[0].name)

  const combinedObject = {
    ...data.adventureInstance.enemyData[0],
    base: base
  }

  return combinedObject
  }

  const player = () => {
    const base = DEMO_DATA.player
  
    const combinedObject = {
      ...data.adventurePlayer.playerState,
      base: base,
      role: data.adventurePlayer.playerRole
    }

    return combinedObject
    }



export default function page() {
  const [selectMenu, setSelectMenu] = useState("base")
  const basePage = [0,3]
  const [pagination, setPagination] = useState(basePage)
  const Boss = boss()
  const Player = player()

  const updateMenu = (destination: string) => {
    if (destination === selectMenu)
    return

    setPagination(basePage)
    setSelectMenu(destination)
  }

  const updatePagination = (change: number) => {
    let newPagination = [...pagination]
    newPagination[0] += change
    if (newPagination[0] < 0) 
      return
    newPagination[1] += change
    setPagination(newPagination)
    console.log(newPagination, pagination)
  }

  function MenuButton ({content, number}: {content: string, number: number}){
    return(
      <>
      <button className='bg-blue-300 rounded px-2 py-1 hover:text-white'>
        {/* {number}. */}
        {content}
      </button>
      </>
    )
  }

  function PlayerMenu (){
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

            <div className='grid grid-rows-3 col-span-2'>
              <div className='grid grid-cols-subgrid row-span-2'>
                <div className='grid  grid-cols-2 grid-rows-2 gap-1'>
                  {selectMenu === "base" && 
                  <>
                  <p className=''>What will you do?</p>
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-gray-500 rounded">{}</div>
                  ))}
                </>
                  }
                  {selectMenu === "action" && 
                    <>
                    {Player.base.moves.map((move, index) => (
                      (index >= pagination[0] && index <= pagination[1]) &&
                      <MenuButton key={index} content={move} number={index}/>
                    ))}
                    {[...Array(Player.base.moves.length > pagination[0] && Player.base.moves.length < pagination[1] ? 4 -  (Player.base.moves.length % 4)  : 0 )].map((_, index) => (
                      <div key={index} className="bg-gray-500 rounded">{index}</div>
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
                      <div key={index} className="bg-gray-500 rounded">{index}</div>
                    ))}
                  </>
                  }
                  {selectMenu === "ally" && 
                  <>
                    {data.adventureInstance.players.map((ally, index) => (
                      Player.base.name!= ally && <MenuButton key={index} content={ally} number={index}/>
                    ))}
                    {[...Array(5 - data.adventureInstance.players.length)].map((_, index) => (
                      <div key={index} className="bg-gray-500 rounded"></div>
                    ))}
                  </>
                  }
                </div>
              </div>
              <div className='grid grid-cols-subgrid'>
                {selectMenu != "base" && selectMenu != "ally" &&
                  <div className='grid grid-cols-3 grid-rows-1'>
                    <button onClick={() => updatePagination(-4)} className='bg-blue-400 rounded px-2 py-1'>{`<`}</button>
                    <div className='bg-blue-300 rounded px-2 py-1'>Page: {(pagination[1] +1)/4}</div>
                    <button onClick={() => updatePagination(4)} className='bg-blue-400 rounded px-2 py-1'>{`>`}</button>
                  </div>
                }
              </div>
            </div>


              <div className='grid grid-cols-1 gap-1'>
                  
                  {selectMenu != "action" ? <button onClick={() => updateMenu("action")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>ACTIONS</button> : <button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}
                  
                  {selectMenu != "item" ? <button onClick={() => updateMenu("item")} className='bg-blue-400 px-2 py-1 rounded hover:text-white'>ITEMS</button> :<button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}
                  
                  {selectMenu != "ally" ? <button onClick={() => updateMenu("ally")} className='bg-blue-400 px-2 py-1 rounded hover:text-white'>ALLIES</button> : <button onClick={() => updateMenu("base")} className=' bg-blue-400 px-2 py-1 rounded hover:text-white'>RETURN</button>}

              </div>
            </div>
      </>
    )
  }

  return (
    <div className=''>
      {/* <div className='bg-gray-100 rounded p-8'>
        <p className=' font-semibold text-center mb-4'>The Dungeons & DragonBalls Demo</p>
        <p className='text-center'>Experience a one on one battle between the character Aspara and Turles!</p>
      </div> */}

      <div className='flex bg-white rounded p-2'>
        <div className=' w-3/5 bg-gray-500 border border-solid border-black rounded p-2'>
          <div className=' text-center bg-gray-400 border border-solid border-black p-1'>
            <p className=''>
            {Boss.base?.displayName}
            </p>
                <div>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      Health: {Boss.hp}
                    </p>
                </div>
            <div className='grid grid-cols-2 gap-1'>
                <div>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      Sparking: {Boss.sparkingMeter}
                    </p>
                </div>
                <div>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                  {Player.base.archetype} Counter: {Boss.archCounter}
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
              <p>Distance: Far</p>
            </div>
          </div>
          <div className=' text-center text-white'>
            <div className='bg-black border border-white rounded'>
              <p className=''>characterName: Action</p>
              <p className=''>
                {`-[ Roll ]-`}
              </p>
              <p className=''>Action Result: </p>
              <p className='text-sm'>
                  Action result description
              </p>
            </div>
          </div>
          <div className=' text-center bg-gray-300 border border-solid border-black '>
          
            <PlayerMenu/>
            
          </div>
        </div>
        <div className='w-2/5 p-2'>
          <p>Tutorial Content</p>
          <p>This stat means this</p>
          <p>That stat means that</p>
          <p>Press buttons to do stuff.</p>
        </div>
      </div>

    </div>
  )
}
