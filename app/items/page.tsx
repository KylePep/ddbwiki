'use client'
import { ITEM_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'

export default function page() {
  const [list, setList] = useState(ITEM_TYPES)

  return (
<main>
<div>
        <h1 className='mb-3'>Items to be equipped or used during your adventures in Dungeons and DragonBalls!</h1>
        <FilterList LIST_TYPE={ITEM_TYPES} list={list} setList={setList} categoryFilterArr={[ "type.equipment", "type.item", "subType.head", "subType.body", "subType.weapon", "subType.consumable"
          ]} />
        <div>
          {list.map((move: any)=>(
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.title}</h2>
                <h3><span className='font-semibold'>Type: </span>{move.type} 
                <span> - {move.subType}</span>
                </h3>
                <p><span className='font-semibold'>Description: </span>{move.description}</p>
          </div>
              ))}
        </div>
      </div>
</main>
  )
}
