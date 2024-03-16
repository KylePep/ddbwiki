'use client'

import { ORIGIN_TYPES } from '@/shared/constants'
import React from 'react'

export default function originsPage() {
  return (
    <main>
      <div>
        <h1>
        Origins are the combination of race and background.
        </h1>
          <ul>
          {ORIGIN_TYPES.map((origin: any)=>(
          <li key={origin.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold'>{origin.title}</h2>
                <p><span className='font-semibold'>Description: </span> {origin.description}</p>
                <h3><span className='font-semibold'>Origin traits: </span> {origin.racialTraits}</h3>
                <h4><span className='font-semibold'>Transformations: </span> {origin.forms}</h4>
          </li>
              ))}
            <h3>***More can be added, but these are the starters***</h3>
          </ul>
      </div>
    </main>
  )
}
