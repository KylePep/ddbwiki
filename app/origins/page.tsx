'use client'

import { FORM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import { MOVE_TYPES } from '@/shared/constants'
import React from 'react'

export default function originsPage() {

  const moveName = ((moveNumber: number)=>{
    const move =  MOVE_TYPES.find((m) => m.id == moveNumber)
    return move?.title
  })

  const formName = ((formNumber: number)=>{
    const form =  FORM_TYPES.find((f) => f.id == formNumber)
    return form?.title
  })

  return (
    <main>
      <div>
        <h1 className='mb-3'>
        In Dungeons and DragonBalls, Origins are the heritage of characters and their backgrounds. Origins have traits and may have transformations.
        </h1>
          <div>
          {ORIGIN_TYPES.map((origin: any)=>(
          <div key={origin.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold mb-1'>{origin.title}</h2>
                <p className='capitalize'><span className='font-semibold'>Description: </span> {origin.description}</p>
                <h3 className='capitalize'><span className='font-semibold'>Origin traits: </span> + {origin.positiveTrait} | - {origin.negativeTrait}</h3>
                { origin.forms.length != 0 ? (
                  
                  <h4><span className='font-semibold'>Transformations: </span> 
                  {origin.forms.map((form: any)=>(
                    <span key={form}>{formName(form)}</span>
                  ))}
                  </h4>
                  
                ):(
                  <h4><span className='font-semibold'>Transformations: </span> None</h4>
                )}
                { origin.moves.length != 0 && (
                  <>
                  <h5 className='font-semibold'>Origin Moves:</h5>
                  <ul>
                    {origin.moves.map((move: any) => (
                      <li key={move}>{moveName(move)}</li>
                    ))}
                </ul>
                  </>
                )}
          </div>
              ))}
            <h3>***More can be added, but these are the starters***</h3>
          </div>
      </div>
    </main>
  )
}
