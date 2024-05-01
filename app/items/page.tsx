'use client'
import { ITEM_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'
import Link from 'next/link'
import PreviewCard from '../components/PreviewCard'

export default function page() {
  const items = [...ITEM_TYPES].filter((i) => i.id != 0)
  const [list, setList] = useState(items)

  return (
<main>
<div>
        <h1 className='mb-3'>Items to be equipped or used during your adventures in Dungeons and DragonBalls!</h1>
        <div className='my-4 bg-white rounded p-4'>
          <p className='mb-3'>
          An item is either an equipment or consumable.
          </p>
          <ul className='mb-3'>
            <li className='mb-3'>An equipment is directly assigned to the character, like body armor or clothing, and {`it's`} bonuses are consistently applied.</li>
            <li>A Consumable is something carried ona character and can be used or consumed in or out of combat. It requires a bonus action, unless specified otherwise.</li>
          </ul>
          <p>
            Items can enhance the way you play and make your characters even more expressive.
          </p>
        </div>
        <FilterList LIST_TYPE={items} list={list} setList={setList} categoryFilterArr={[ "type.equipment", "type.item", "subType.head", "subType.body", "subType.weapon", "subType.consumable"
          ]} />
          {/* Min view */}
        <div>
        {list.map((item: any)=>(
        <PreviewCard key={item.id} content={item} pathName='items'/>

          // <div key={item.id} className='grid grid-cols-3 gap-2 bg-gray-100 rounded-md px-4 py-2 mb-2'>
          //   <div>
          //       <h2 className="font-bold">{item.displayName}</h2>
          //         <h3 className='my-2'><span className='font-semibold'>Type: </span>{item.type} <span> - {item.subType}</span></h3>
          //   </div>
          //         <p className="mb-2">{item.description}</p>
          //         <div className="flex justify-center items-center">
          //         <Link href={`items/${item.name}`} className="font-semibold hover:text-white bg-gray-400 rounded p-1"> Details</Link>
          //         </div>

          // </div>
              ))}
        </div>
      </div>
</main>
  )
}
