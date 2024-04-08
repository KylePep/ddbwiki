'use client'

import { ARCHETYPE_TYPES, MOVE_TYPES } from '@/shared/constants'
import React from 'react'

export default function archetypesPage() {

  const moveName = ((moveName: string)=>{
    const move =  MOVE_TYPES.find((m) => m.name == moveName)
    return move?.displayName
  })

  return (
    <main>
          <h1 className='mb-4 text-xl'>The classes of Dungeons & DragonBalls</h1>
      <div>
      {ARCHETYPE_TYPES.map((arch: any)=>(
          <div key={arch.id} className='bg-gray-100 rounded-md px-6 py-4 mb-2'>
                <h2 className='font-bold text-lg'>{arch.displayName}</h2>
                <h3 className='mb-3'>{arch.examples}</h3>
                <p className='mb-2'><span className='font-semibold'>Description: </span> {arch.description}</p>
                { arch.moves.length != 0 && (
                  <div className='mb-2'>
                  <h5 className='font-semibold mb-1'>Archetype Moves:</h5>
                  <ul>
                    {arch.moves.map((move: any) => (
                      <li key={move}>{moveName(move)}</li>
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
