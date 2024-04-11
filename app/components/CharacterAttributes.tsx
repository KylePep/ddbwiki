import React from 'react'

export default function CharacterAttributes() {
  return (
    <div className=' bg-white p-4 rounded'>
      <h1 className='text-lg font-bold mb-4'>CHARACTER ATTRIBUTES</h1>

    <div className='grid gap-4 grid-cols-1'>

      <div>
        <p className='font-bold mb-1'>Health:</p>
        <ul className='list-disc text-sm'>
          <li>When Health Points are reduced to zero, a character is out of combat unless they are recovered by a healing item such as a Senzu Bean.</li>
          <li>While out of combat, a character {`can't`} use attacks but can use some support moves.</li>
          <li>Health can be recovered by healing items, but {`can't`} be raised above {`it's`} max.</li>
        </ul>
      </div>

      <div>
        <p className='font-bold mb-1'>Health Points:</p>
        <ul className='list-disc text-sm'>
          <li>Health points are what makes up your characters health.</li>
          <li>Health points are amplified by your sparking level.</li>
          <li>In order to remove a health point form an entity you will either need to do damage equal to or greater than their sparking level, or lower their sparking level enough before doing damage.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Energy:</p>
        <ul className='list-disc text-sm'>
          <li>Energy is a measure of a characters ability to use it per turn.</li>
          <li>A character with higher energy will have access to more or stronger energy attacks per turn.</li>
        </ul>
      </div>

      <div>
        <p className='font-bold mb-1'>Range:</p>
        <ul className='list-disc text-sm'>
          <li>The distance from a character and the target.</li>
          <li>Close range - targets are next to each other.</li>
          <li>Mid range - targets are close to each other.</li>
          <li>Long range - targets are far from each other.</li>
          <li>Out of range - targets are too far apart.</li>
        </ul>
      </div>

      <div>
        <p className='font-bold mb-1'>Speed:</p>
        <ul className='list-disc text-sm'>
          <li>A characters speed is derived from {`it's`} agility and item effects.</li>
          <li>A character with higher speed will likely have a higher place in turn order.</li>
        </ul>
      </div>

      <div>
        <p className='font-bold mb-1'>Targeting:</p>
        <ul className='list-disc text-sm'>
          <li>A character can target; other characters, opponents and themselves.</li>
          <li>An entity can become a target if they are {`'targetable'`} and within range.</li>
        </ul>
      </div>

      <div>
        <p className='font-bold mb-1'>Archetype Counter:</p>
        <ul className='list-disc text-sm'>
          <li>{`'Arch'`} counters are a limited resource, that allows characters to perform special moves or actions.</li>
          <li>The moves performed with Arch counters usually interact with a characters Sparking Meter.</li>
          <li>Arch counters are not often restored, using them wisely is key to efficiency.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Sparking Meter:</p>
        <ul className='list-disc text-sm'>
          <li>The sparking meter is a universal resource. Every entity in the game has a sparking value, enemies of higher levels have sparking meters that can change.</li>
          <li>Sparking meter can be used to help smooth out the randomness of an action or an encounter through rerolls.</li>
          <li>Sparking meter is a requirement for many transformations.</li>
          <li>Reducing a villains sparking meter below your own or to zero is key to victory.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Movement:</p>
        <ul className='list-disc text-sm'>
          <li>In combat movement is assumed based on the same ranges specified by targeting.</li>
          <li>Distance is changed based on moves performed or actions taken.</li>
          <li>Movement or moving is therefore not an available action.</li>
        </ul>
      </div> 

    </div>

    </div>
  )
}

{/*  Template
<div>
  <p className='font-bold mb-1'>:</p>
  <ul className='list-disc text-sm'>
    <li></li>
  </ul>
</div> 
*/}