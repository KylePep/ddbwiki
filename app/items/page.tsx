import { ITEM_TYPES } from '@/shared/constants'
import React from 'react'

export default function page() {
  return (
<main>
<div>
        <h1 className='mb-3'>Items to be equipped or used during your adventures in Dungeons and DragonBalls!</h1>
        <ul>
          {ITEM_TYPES.map((move: any)=>(
          <li key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.title}</h2>
                <h3><span className='font-semibold'>Type: </span>{move.type} 
                <span> - {move.subType}</span>
                </h3>
                <p><span className='font-semibold'>Description: </span>{move.description}</p>
          </li>
              ))}
        </ul>
      </div>
</main>
  )
}
