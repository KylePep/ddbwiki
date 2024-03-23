'use client'
import { ARCHETYPE_TYPES, ITEM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import Modal from '../components/Modal'
interface formProps{
  form: any
}

export default function Items({form}:formProps) {
  const [toggle, setToggle] = useState(false)
  const [content, setContent] = useState('')

  const origin = ORIGIN_TYPES.find((o)=> o.title === form.origin)
  const archetype = ARCHETYPE_TYPES.find((a) => a.title === form.archetype)

  const originItems = origin ? origin.startingItems : []
  const archItems = archetype ? archetype.startingItems : []

  const items = originItems.concat(archItems)
  
  const itemsList = items.map((il) => {
    const itemsById = ITEM_TYPES.find((i) => i.id === il)
    return itemsById
  })

  return (
    <div className='bg-gray-300 p-2 rounded-md mb-3'>
      <p className='font-bold'>Inventory</p>
    <div className='bg-white me-10 py-2 w-full'>
      <ul>
        {itemsList.map((item: any)=>(
        <li className='hover:cursor-pointer hover:text-gray-500' onClick={(e)=> {setToggle(true), setContent( item)}} key={item.id}>{item.title}
        
        </li>
        ))}
      </ul>
    </div>

  {toggle && <Modal type="describe"  content = {content} setToggle = {setToggle} />}

</div>
  )
}
