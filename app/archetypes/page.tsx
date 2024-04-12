'use client'

import { ARCHETYPE_TYPES, ITEM_TYPES, MOVE_TYPES } from '@/shared/constants'
import React from 'react'

export default function archetypesPage() {

  const moveName = ((moveName: string)=>{
    const move =  MOVE_TYPES.find((m) => m.name == moveName)
    return move?.displayName
  })

  const itemName = ((itemName: string)=>{
    const item =  ITEM_TYPES.find((i) => i.name == itemName)
    return item?.displayName
  })

  return (
    <main>
          <h1 className='mb-4 text-xl'>The classes of Dungeons & DragonBalls</h1>
      <div>
      {ARCHETYPE_TYPES.map((arch: any)=>(
          <div key={arch.id} className='bg-gray-100 rounded-md px-6 py-4 mb-2'>
                <h2 className='font-bold text-lg'>{arch.displayName} <span className='text-base font-normal mb-3'>{arch.examples}</span></h2>
                
                <p className='mb-2'> {arch.description}</p>
                <p className='mb-2 mx-8'>{arch.extraDescription}</p>
                { arch.moves.length != 0 && (
                  <div className='mb-2'>
                  <h3 className='font-semibold mb-1'>Archetype Powers:</h3>
                  <ul>
                    {arch.archPower.map((aP: any, index: number) => (
                      <li key={aP}> <span>Level {index + 1} </span>{aP}</li>
                    ))}
                </ul>
                  </div>
                )}
                { arch.moves.length != 0 && (
                  <div className='mb-2'>
                  <h3 className='font-semibold mb-1'>Moves:</h3>
                  <ul>
                    {arch.moves.map((move: any, index: number) => (
                      <li key={move}> <span>Level {index + 1} </span>{moveName(move)}</li>
                    ))}
                </ul>
                  </div>
                )}

                { arch.startingItems.length != 0 && (
                    <div className='mb-2'>
                    <h3 className='font-semibold mb-1'>Items:</h3>
                    <ul>
                      {arch.startingItems.map((item: any) => (
                        <li key={item}>{itemName(item)}</li>
                      ))}
                  </ul>
                    </div>
                  )}

          </div>
              ))}
      </div>
    </main>
  )
}
