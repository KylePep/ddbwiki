'use client'
import { MOVE_TYPES } from "../../shared/constants/index";

import React from 'react'

export default function movesPage() {
  return (
    <main>
      <div>
        <h1 className='mb-3'>A list of moves in D&DB</h1>
        <ul>
          {MOVE_TYPES.map((move: any)=>(
          <li key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2>Title: {move.title}</h2>
                <h3>Type: {move.type}</h3>
                <h4>Style: {move.style}</h4>
                <p>Description {move.description}</p>
          </li>
              ))}
        </ul>
      </div>
    </main>
  )
}
