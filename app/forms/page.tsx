'use client'

import { FORM_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'

export default function formPage() {
  const [list, setList] = useState(FORM_TYPES)

  return (
    <main>
      <div className='mb-3'>
        <h1>Transformations are a change to a characters state that is reflected in the changing of stats or the manifestation fo passive or active abilities</h1>
        <div>Transformations can be an aura, the alteration of a physical characteristic or a full body change</div>
        <h2 className='font-bold'>Auras</h2>
        <p>potential unlocked</p>
        <p>Mostly consist of a slight boost in power at the cost of being slightly more taxing on a stat or resource</p>
        <h2 className='font-bold'>Alterations</h2>
        <p>Super Saiyan</p>
        <p>Alterations are in the middle, giving a more powerful temporary boost while being maintained by a resource</p>
        <h2 className='font-bold'>Forms</h2>
        <p>Great Ape</p>
        <p>Forms are at the high end. These changes have the most risk for reward, if the user {`can't`} keep up with the demand for a resource, exhaustion can set in fast and leave the user vulnerable.</p>
      </div>
      <FilterList LIST_TYPE={FORM_TYPES} list={list} setList={setList} categoryFilterArr={["type.form", "type.alteration", "type.aura"]} />
      <div>
      {list.map((form: any)=>(
          <div key={form.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className='font-bold'>{form.displayName}</h2>
                <h3><span className='font-semibold'>Type: </span>{form.type}</h3>
                <p><span className='font-semibold'>Description: </span>{form.description}</p>
          </div>
              ))}
      </div>
    </main>
  )
}
