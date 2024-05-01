'use client'
import { ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'
import Link from 'next/link'
import PreviewCard from '../components/PreviewCard'

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
      <div>
        <h1 className='mb-3'>A list of enemies in D&DB</h1>
        <FilterList LIST_TYPE={ENEMY_TYPES} list={list} setList={setList} categoryFilterArr={["type.henchmen", "type.boss"]}/>
        <div>
        {list.map((enemy: any)=>(
        <PreviewCard key={enemy.id} content={enemy} pathName='enemies'/>
          // <div key={enemy.id} className='grid grid-cols-3 gap-2 bg-gray-100 rounded-md px-4 py-2 mb-2'>
          //   <div>
          //       <h2 className="font-bold">{enemy.displayName}</h2>
          //         <h3 className='my-2'><span className='font-semibold'>Type: </span>{enemy.type} <span> - {enemy.archetype}</span></h3>
          //   </div>
          //         <p className="mb-2">{enemy.description}</p>
          //         <div className="flex justify-center items-center">
          //         <Link href={`enemies/${enemy.name}`} className="font-semibold hover:text-white bg-gray-400 rounded p-1"> Details</Link>
          //         </div>

          // </div>
              ))}
        </div>
      </div>
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