'use client'

import { ORIGIN_TYPES } from '@/shared/constants'
import React from 'react'

export default function originsPage() {
  return (
    <main>
      <div>
        <h1 className='mb-3'>
        In Dungeons and DragonBalls, Origins are the heritage of characters and their backgrounds. Origins have traits and may have transformations.
        </h1>
          <div>
          {ORIGIN_TYPES.map((origin: any)=>(
          <div key={origin.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold'>{origin.title}</h2>
                <p><span className='font-semibold'>Description: </span> {origin.description}</p>
                <h3><span className='font-semibold'>Origin traits: </span> {origin.racialTraits}</h3>
                <h4><span className='font-semibold'>Transformations: </span> {origin.forms}</h4>
          </div>
              ))}
            <h3>***More can be added, but these are the starters***</h3>
          </div>
      </div>
    </main>
  )
}
