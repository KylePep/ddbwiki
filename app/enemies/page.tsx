import { ENEMY_TYPES } from '@/shared/constants'
import React from 'react'

export default function page() {
  return (
    <main>
      <div>
        <h1 className='mb-3'>A list of enemies in D&DB</h1>
        <div>
          {ENEMY_TYPES.map((move: any)=>(
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.title}</h2>
                <h3><span className='font-semibold'>Type: </span>{move.type}</h3>
                <h4><span className='font-semibold'>Description: </span></h4>
          </div>
              ))}
        </div>
      </div>
    </main>
  )
}
