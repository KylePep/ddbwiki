'use client'

import React from 'react'
import Dice from '../components/Dice'
import CharacterStats from '../components/CharacterStats'
import SpecialResources from '../components/SpecialResources'
import SparkingMeter from '../components/SparkingMeter'
import CharacterAttributes from '../components/CharacterAttributes'

export default function page() {
  return (
    <div>
      <div className='grid gap-4 grid-cols-1'>
      {/* <Dice/> */}
      <CharacterStats/>
      <CharacterAttributes/>
      {/* <SparkingMeter/> */}
      {/* <SpecialResources/> */}
      </div>
    </div>
  )
}
