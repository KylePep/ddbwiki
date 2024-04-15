'use client'

import React from 'react'
import CharacterStats from '../components/CharacterStats'
import CharacterAttributes from '../components/CharacterAttributes'
import CharacterActions from '../components/CharacterActions'
import CharacterEffects from '../components/CharacterEffects'

export default function page() {
  return (
    <div>
      <div className='bg-blue-400 rounded flex justify-around p-2 my-2'>
        <button className='font-bold hover:text-white'>Stats</button>
        <button className='font-bold hover:text-white'>Attributes</button>
        <button className='font-bold hover:text-white'>Actions</button>
        <button className='font-bold hover:text-white'>Effects</button>
      </div>

      <div className='bg-white rounded p-4 mb-2'>
        <p>Lean about the keywords and rules in Dungeons & DragonBalls</p>
      </div>

      <div className='grid gap-4 grid-cols-1'>
      <CharacterStats/>
      <CharacterAttributes/>
      <CharacterActions />
      <CharacterEffects/>
      </div>
    </div>
  )
}
