import React from 'react'

export default function CharacterStats() {
  return (
    <div className='my-8'>
      <h1 className=''>The RPG system that the dragon ball movies will utilize.</h1>
      <div className='my-4 '>
      <h2 className='font-bold'>A Character based system:</h2>
      <ul>
        <li>It prioritizes the player character as well as {`NPC's`} and Bosses</li>
        <li>There will be less focus on the world and the characters interactions within it.</li>
        <li>Characters have depth and variety of actions and attributes yet are streamlined.</li>
      </ul>
      </div>
      <div>
        <h2 className='font-bold'>Character Stats:</h2>
        <ul>
          <li>Spirit - The mental fortitude a character has.</li>
          <li>Power - The amount of force a character can use.</li>
          <li>Toughness - The amount of force a character can withstand.</li>
          <li>Ki - The amount of spiritual power a character has access to.</li>
          <li>Agility - The amount of speed a character can use.</li>
        </ul>
        <h3 className='mt-2 font-bold'>Example Class Priorities:</h3>
        <ul>
          <li>Damage Class - Power | Ki</li>
          <li>Tank Class - Toughness | Agility</li>
          <li>Support Class - Spirit | Ki</li>
        </ul>
      </div>
      <p className='mt-3'>These 5 stats help determine what a character is capable of during an adventure</p>
      
    </div>
  )
}
