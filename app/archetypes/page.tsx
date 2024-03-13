'use client'

import { ARCHETYPE_TYPES } from '@/shared/constants'
import React from 'react'

export default function archetypesPage() {
  return (
    <main>
          <h1 className='mb-4'>The classes of Dungeons & DragonBalls</h1>
      <ul>
      {ARCHETYPE_TYPES.map((arch: any)=>(
          <li key={arch.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold'>{arch.title}</h2>
                <h3>{arch.examples}</h3>
                <p>Description {arch.description}</p>
          </li>
              ))}
      </ul>
    </main>
  )
}
