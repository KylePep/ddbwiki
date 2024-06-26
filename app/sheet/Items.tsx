'use client'
import { ARCHETYPE_TYPES, ITEM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
interface formProps{
  form: any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Items({form, handleChange}:formProps) {
  const [toggle, setToggle] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() =>{
    
    const origin = ORIGIN_TYPES.find((o)=> o.displayName === form.origin)
    const archetype = ARCHETYPE_TYPES.find((a) => a.displayName === form.archetype)
  
    // const originItems = origin ? origin.startingItems : []
    // const archItems = archetype ? archetype.startingItems : []
    const items = archetype ? archetype.startingItems : []
  
    // const items = originItems.concat(archItems)
    
    const updatedItemsList = items.map((il) => {
      const itemsById = ITEM_TYPES.find((i) => i.name === il)
      return itemsById
    })
    
    handleChange({
      target: {
        name: 'inventory',
        value: updatedItemsList
      }
    } as React.ChangeEvent<any>);
  }, [form.origin, form.archetype])
  
  const itemsList = form.inventory
  const equippedList = form.equipment

  const toggleEquip = ((item: any)=>{
    if(item.type != "equipment"){
      return
    }
    
    if(item.subType === 'head'){
      if(equippedList[0] == item.id) equippedList[0] = 0;
      else 
      equippedList[0] = item.id
    } else if (item.subType === 'body'){
      if(equippedList[1] == item.id) equippedList[1] = 0;
      else
      equippedList[1] = item.id
    } else {
      if(equippedList[2] == item.id) equippedList[2] = 0;
      else
      equippedList[2] = item.id
    }
    handleChange({
      target: {
        name: 'equipment',
        value: equippedList
      }
    } as React.ChangeEvent<any>);
  })

  return (
    <div className='bg-gray-300 p-2 rounded-md mb-3'>
      <p className='font-bold'>Inventory</p>
    <div className='bg-white me-10 py-2 w-full'>
      <ul>
        {itemsList.map((item: any)=>(
        <li className='group hover:text-gray-800'  key={item.id}> <span className={equippedList.includes(item.id) ? 'font-bold' : 'invisible' }>E</span> {item.displayName}

        <span className='invisible group-hover:visible mx-2'>
          <button onClick={(e)=> {setToggle(true), setContent( item)}} className='bg-blue-200 hover:bg-blue-300 px-1 rounded'>Info</button>
          </span>

        <span className={'invisible ' + (item.type != "equipment" ? '' : 'group-hover:visible ')}> 
        <button onClick={()=> toggleEquip(item)} className={'bg-blue-200 hover:bg-blue-300 px-1 rounded' }>{equippedList.includes(item.id) ? 'UnEquip' : 'Equip' }</button>
        </span> 

        </li>
        ))}
      </ul>
    </div>

  {toggle && <Modal type="describe"  content = {content} setToggle = {setToggle} />}

</div>
  )
}
