'use client'

import React from 'react'

export default function movesPage() {
  return (
    <main>
      <div>
        <h1 className='mb-3'>A list of moves in D&DB</h1>
        <ul>
          <li className='mb-2'>
            <h2>Name: Kamahameha</h2>
            <p>Description: An energy wave attack.</p>
          </li>
          <li className='mb-2'>
            <h2 >Name: Special Beam Cannon</h2>
            <p>Description: A concentrated beam attack that takes a long time to charge.</p>
          </li>
          <li className='mb-2'>
            <h2>Name: Double Sunday</h2>
            <p>Description: An enery wave attack capable of targeting two opponents.</p>
          </li>
        </ul>
      </div>
    </main>
  )
}
