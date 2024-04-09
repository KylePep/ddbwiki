import React from 'react'

export default function CharacterStats() {
  return (
    <div className=' bg-white p-4 rounded'>
      <h1 className='text-xl font-bold mb-2'>CHARACTER STATS</h1>
      <div>
        <h2 className='font-bold'>Stats:</h2>
        <ul>
          <li>Spirit - The mental fortitude a character has.</li>
          <li>Power - The amount of force a character can use.</li>
          <li>Toughness - The amount of force a character can withstand.</li>
          <li>Ki - The amount of spiritual power a character has access to.</li>
          <li>Agility - The amount of speed a character can use.</li>
        </ul>
        {/* <h3 className='mt-2 font-bold'>Example Class Priorities:</h3>
        <ul>
          <li>Damage Class - Power | Ki</li>
          <li>Tank Class - Toughness | Agility</li>
          <li>Support Class - Spirit | Ki</li>
        </ul> */}
      </div>
      {/* <p className='mt-3'>These 5 stats help determine what a character is capable of during an adventure</p> */}
      
    </div>
  )
}
