'use client'
import { ITEM_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/filterList'

export default function page() {
  const [sortedBy, setSortedBy] = useState("none")
  let ITEMS = ITEM_TYPES

  if(sortedBy == "none"){
    ITEMS = ITEM_TYPES
  } else if (sortedBy == "Equipment"){
    ITEMS = ITEM_TYPES.filter((m)=> m.type == "equipment")
  } else if (sortedBy == "Item"){
    ITEMS = ITEM_TYPES.filter((m)=>m.type == "item")
  } else if (sortedBy == "Head"){
    ITEMS = ITEM_TYPES.filter((m)=>m.subType == "head")
  } else if (sortedBy == "Body"){
    ITEMS = ITEM_TYPES.filter((m)=>m.subType == "body")
  } else if (sortedBy == "Weapon"){
    ITEMS = ITEM_TYPES.filter((m)=>m.subType == "weapon")
  } else if (sortedBy == "Consumable"){
    ITEMS = ITEM_TYPES.filter((m)=>m.subType == "consumable")
  }

  const sortBy = ( sortBy: string) =>{
    if (sortedBy === sortBy) sortBy = "none"
    setSortedBy(sortBy)
  }

  return (
<main>
<div>
        <h1 className='mb-3'>Items to be equipped or used during your adventures in Dungeons and DragonBalls!</h1>
        <div className="flex justify-around my-3 font-bold bg-red-400 px-4 py-2 rounded-md ">
          {["Equipment", "Item", "Head", "Body", "Weapon", "Consumable"].map((sort: any) => (
            <button className="hover:text-white" onClick={()=>sortBy(sort)} key={sort}>{sort}</button>
          ))}
        </div>
        <FilterList LIST_TYPE={ITEM_TYPES} categoryFilterArr={["type.item", "type.head", "subType.body", "subType.weapon", "subType.consumable"]} />
        <div>
          {ITEMS.map((move: any)=>(
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
