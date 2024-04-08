'use client'
import { ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'

export default function page() {
  const [list, setList] = useState(ENEMY_TYPES)

  // {
  //   "id": 6,
  //   "adventure": ["treeOfMight"],
  //   "title": "Turles",
  //   "type": "Boss",
  //   "archetype": "Leader",
  //   "origin": "Saiyan",
  //   "allegiance": "Turles Crusher Corps",
  //   "description": "A low-class Saiyan warrior. Turles is merciless, prideful and confident. His heart is a ball of pure evil, he lacks all empathy and doesn't care about the differences between good and evil.",
  //   "uniqueMoves": ["Kill Driver", "Sudden Storm", "Force Explosion", "Meteor Burts", "Rock Crusher", "Calamity Blaster", "Ki Smoke Bomb", "Energy Charge"],
  //   "equipment": ["Saiyan Armor", "Scouter"]
  // }


  return (
    <main>
      <div>
        <h1 className='mb-3'>A list of enemies in D&DB</h1>
        <FilterList LIST_TYPE={ENEMY_TYPES} list={list} setList={setList} categoryFilterArr={["type.henchmen", "type.boss"]}/>
        <div>
          {list.map((enemy: any)=>(
          <div key={enemy.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold text-xl">{enemy.displayName}</h2>
                <h3><span className='font-semibold'>Adventure: </span>{enemy.adventure}</h3>

                <h3><span className='font-semibold'>Allegiance: </span>{enemy.allegiance}</h3>
                <h4><span className='font-semibold'>Appearance: </span>{enemy.appearance}</h4>
                <h4><span className='font-semibold'>Background: </span>{enemy.background}</h4>

                <div>
                  <p className='border-solid border-2 border-b-black font-semibold my-4'>Details</p>
                </div>

                <h3 className='capitalize'><span className='font-semibold'>Type: </span>{enemy.type}</h3>
                <h3 className='capitalize'><span className='font-semibold'> Origin:  </span> {enemy.origin} <span className='font-semibold'>Archetype: </span> {enemy.archetype}</h3>

                <h3 className='capitalize'><span className='font-semibold'>Base Level: </span>{enemy.baseLevel}</h3>
                <h3 className='font-semibold'>Base Stats:</h3>
                <div className='flex justify-around font-semibold'>
                  <p>Spirit - <span className='font-normal'>{enemy.baseStats.spirit}</span></p>
                  <p>Ki - <span className='font-normal'>{enemy.baseStats.ki}</span></p>
                  <p>Power - <span className='font-normal'>{enemy.baseStats.power}</span></p>
                  <p>Agility - <span className='font-normal'>{enemy.baseStats.agility}</span></p>
                  <p>Toughness - <span className='font-normal'>{enemy.baseStats.toughness}</span></p>
                </div>
                
                <div className='grid grid-cols-2 gap-2 mt-2'>
                <ul><span className='font-semibold'>Unique Moves:</span>
                  { enemy.uniqueMoves.map((move: any)=>(
                    <li key={move}>{move}</li>
                  ))
                  }
                </ul>
                <ul><span className='font-semibold'>Equipment:</span>
                  { enemy.equipment.map((item: any)=>(
                    <li key={item}>{item}</li>
                  ))
                  }
                </ul>
                </div>
          </div>
              ))}
        </div>
      </div>
    </main>
  )
}


// ,
//     {
//       "id": 991,
//       "title": "Saibamen",
//       "type": "basic"
//     },
//     {
//       "id": 992,
//       "title": "Pirate Robot",
//       "type": "basic"
//     },
//     {
//       "id": 993,
//       "title": "Red Ribbon Soldier",
//       "type": "basic"
//     },
//     {
//       "id": 994,
//       "title": "Red Ribbon Robot",
//       "type": "basic"
//     },
//     {
//       "id": 995,
//       "title": "Raditz",
//       "type": "boss"
//     },
//     {
//       "id": 996,
//       "title": "Nappa",
//       "type": "boss"
//     },
//     {
//       "id": 997,
//       "title": "Vegeta",
//       "type": "boss"
//     }