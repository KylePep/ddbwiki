'use client'

import React from 'react'
import CharacterStats from '../components/CharacterStats'
import CharacterAttributes from '../components/CharacterAttributes'
import CharacterActions from '../components/CharacterActions'

export default function page() {
  return (
    <div>
      <div className='grid gap-4 grid-cols-1'>
      <CharacterStats/>
      <CharacterAttributes/>
      <CharacterActions />
      </div>
    </div>
  )
}
