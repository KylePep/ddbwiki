'use client'

import { FORM_TYPES, ITEM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import { MOVE_TYPES } from '@/shared/constants'
import React from 'react'

export default function originsPage() {

  const moveName = ((moveName: string)=>{
    const move =  MOVE_TYPES.find((m) => m.name == moveName)
    return move?.displayName
  })

  const formName = ((formName: string)=>{
    const form =  FORM_TYPES.find((f) => f.name == formName)
    return form?.displayName
  })

  const itemName = ((itemName: string)=> {
    const item = ITEM_TYPES.find((i)=> i.name == itemName)
    return item?.displayName
  })

  return (
    <main>
      <div>
        <h1 className='mb-3 text-lg'>
        In Dungeons and DragonBalls, Origins are the heritage of characters and their backgrounds. Origins have traits and may have transformations.
        </h1>
          <div>
          {ORIGIN_TYPES.map((origin: any)=>(
          <div key={origin.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold mb-1 text-lg'>{origin.displayName}</h2>
                <p><span className='font-semibold'>Description: </span> {origin.description}</p>
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
                {/* { origin.startingItems != 0 ? (
                  <h4><span className='font-semibold'>Starting Items: </span>
                  <ul>
                    {origin.startingItems.map((item: any) => (
                      <li key={item}>{itemName(item)}</li>
                    ))}
                  </ul>
                  </h4>
                ): ( <h4>No starting Items</h4> )
              } */}
          </div>
              ))}
            <h3>***More can be added, but these are the starters***</h3>
          </div>
      </div>
    </main>
  )
}
