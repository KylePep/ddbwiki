'use client'

import React from 'react'
import CharacterStats from '../components/CharacterStats'
import CharacterAttributes from '../components/CharacterAttributes'
import CharacterActions from '../components/CharacterActions'
import CharacterEffects from '../components/CharacterEffects'
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
        <p>Lean about the keywords and rules in Dungeons & DragonBalls</p>
      </div>

      <div className='grid gap-4 grid-cols-1'>

      </div>
    </div>
  )
}
