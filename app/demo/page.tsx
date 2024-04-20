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

  console.log("boss", combinedObject)
  return combinedObject
  }

  const player = () => {
    const base = DEMO_DATA.player
  
    const combinedObject = {
      ...data.adventurePlayer.playerState,
      base: base,
      role: data.adventurePlayer.playerRole
    }
  
    console.log("player", combinedObject)
    return combinedObject
    }



export default function page() {
  const [selectMenu, setSelectMenu] = useState("base")
  const Boss = boss()
  const Player = player()

  function MenuButton ({content}: {content: string}){
    return(
      <>
      <button className='bg-blue-300 rounded px-2 py-1 hover:text-white'>
        {content}
      </button>
      </>
    )
  }

  function PlayerMenu (){
    return (
      <>
            <p className='mb-4'>{Player.base.name}</p>

            <div className='grid grid-cols-3 gap-2 mb-10'>
                  <div>
                    <p className='text-center'>Sparking</p>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                        {Player.sparkingMeter}
                      </p>
                  </div>

                  <div>
                      <p className='text-center'>Health</p>
                      <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                        {Player.hp}
                      </p>
                  </div>

                  <div>
                    <p className='text-center capitalize'>{Player.base.archetype} Counter</p>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                        {Player.archCounter}
                      </p>
                  </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-3 gap-2 min-h-36 mb-4'>

                {selectMenu === "base" && 
                <>
                </>
                }
                {selectMenu === "action" && 
                <>
                  {Player.base.moves.map((move, index) => (
                    <MenuButton key={index} content={move}/>
                  ))}
                </>
                }
                {selectMenu === "item" && 
                <>
                  {Player.base.inventory.map((item, index) => (
                    <MenuButton key={index} content={item}/>
                    ))}
                </>
                }
                {selectMenu === "ally" && 
                <>
                  {data.adventureInstance.players.map((ally, index) => (
                    Player.base.name!= ally && <MenuButton key={index} content={ally}/>

                  ))}
                </>
                }
            </div>


            <div className='grid grid-cols-3 gap-2'>
                
                {selectMenu === "base" && <button onClick={() => setSelectMenu("action")} className=' bg-blue-400 mb-2 px-2 py-1 rounded hover:text-white'>ACTIONS</button> }
                
                {selectMenu === "base" && <button onClick={() => setSelectMenu("item")} className='bg-blue-400 mb-2 px-2 py-1 rounded hover:text-white'>ITEMS</button>}
                
                {selectMenu === "base" && <button onClick={() => setSelectMenu("ally")} className='bg-blue-400 mb-2 px-2 py-1 rounded hover:text-white'>ALLIES</button>}
                
                {selectMenu != "base" && <button onClick={() => setSelectMenu("base")} className=' col-span-3 bg-blue-400 mb-2 px-2 py-1 rounded hover:text-white'>Close</button>}

            </div>
      </>
    )
  }

  return (
    <div>
      <div className='bg-gray-100 rounded p-8'>
        <p className='text-lg font-semibold text-center mb-4'>The Dungeons & DragonBalls Demo</p>
        <p className='text-center'>Experience a one on one battle between the character Aspara and Turles!</p>
      </div>

      <div className='my-4 bg-white rounded p-4 grid grid-cols-1 '>
        <div className='bg-gray-500 border border-solid border-black rounded p-4'>
          <div className='text-lg font-bold text-center bg-gray-400 border border-solid border-black p-2'>
            <p className='mb-4 text-xl'>
            {Boss.base?.displayName}
            </p>
            <p className='font-semibold text-l mb-4'>Enemy state description.</p>
            <div className='grid grid-cols-3 gap-2 mb-10'>
                <div>
                  <p className='text-center'>Sparking</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {Boss.sparkingMeter}
                    </p>
                </div>
                <div>
                    <p className='text-center'>Health</p>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {Boss.hp}
                    </p>
                </div>
                <div>
                  <p className='text-center capitalize'>{Player.base.archetype} Counter</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {Boss.archCounter}
                    </p>
                </div>
            </div>
          </div>
          <div className='my-2 text-center font-bold text-xl text-white'>
            <div className='bg-black border border-white rounded px-2 py-2'>
              <p className='text-lg'>characterName: Action</p>
              <p className='my-2'>
                {`-[ Roll ]-`}
              </p>
              <p className='text-lg'>Action Result: </p>
              <p className='text-sm'>
                  Action result description
              </p>
            </div>
          </div>
          <div className='text-lg font-bold text-center mt-4 bg-gray-300 border border-solid border-black p-2'>
          
            <PlayerMenu/>
            
          </div>
        </div>
      </div>

    </div>
  )
}
