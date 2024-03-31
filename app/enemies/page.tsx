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
        <FilterList LIST_TYPE={ENEMY_TYPES} list={list} setList={setList} categoryFilterArr={["type.basic", "type.boss"]}/>
        <div>
          {list.map((enemy: any)=>(
          <div key={enemy.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold text-xl">{enemy.title}</h2>
                <h3><span className='font-semibold'>Adventure </span>{enemy.adventure}</h3>
                <h3><span className='font-semibold'>Type: </span>{enemy.type}</h3>
                <h3><span className='font-semibold'>Archetype: </span> {enemy.archetype}<span className='font-semibold'> Origin:  </span> {enemy.origin}</h3>
                <h3><span className='font-semibold'>Allegiance: </span>{enemy.allegiance}</h3>
                <h4><span className='font-semibold'>Description: </span>{enemy.description}</h4>
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