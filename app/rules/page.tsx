'use client'

import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <div className='bg-blue-400 rounded flex justify-around p-2 my-2'>
        <Link href={"rules/stats"} className='font-bold hover:text-white'>Stats</Link>
        <Link href={"rules/attributes"} className='font-bold hover:text-white'>Attributes</Link>
        <Link href={"rules/actions"} className='font-bold hover:text-white'>Actions</Link>
        <Link href={"rules/effects"} className='font-bold hover:text-white'>Effects</Link>
      </div>

      <div className='bg-white rounded p-4 mb-2'>
        <h1 className='font-semibold'>The rules of Dungeons & DragonBalls</h1>
        <p>Here you can learn more about all of the different aspects of D&DB.</p>
      </div>
    </div>
  )
}
