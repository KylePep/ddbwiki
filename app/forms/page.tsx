'use client'

import { AWAKEN_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'
import Link from 'next/link'

export default function formPage() {
  const [list, setList] = useState(AWAKEN_TYPES)

  return (
    <div>

      <div className='bg-white rounded p-4 mb-3'>
        <h1>Awakenings are skills that cause a change to a characters state that is reflected in the changing of stats or the manifestation of passive or active abilities</h1>
        <div>Awakenings can be Transformations, a new form, or a power up.</div>
        {/* <h2 className='font-bold'>Auras</h2>
        <p>potential unlocked</p>
        <p>Mostly consist of a slight boost in power at the cost of being slightly more taxing on a stat or resource</p>
        <h2 className='font-bold'>Alterations</h2>
        <p>Super Saiyan</p>
        <p>Alterations are in the middle, giving a more powerful temporary boost while being maintained by a resource</p>
        <h2 className='font-bold'>Forms</h2>
        <p>Great Ape</p>
        <p>Forms are at the high end. These changes have the most risk for reward, if the user {`can't`} keep up with the demand for a resource, exhaustion can set in fast and leave the user vulnerable.</p> */}
      </div>
      <FilterList LIST_TYPE={AWAKEN_TYPES} list={list} setList={setList} categoryFilterArr={["type.transformation", "type.form", "type.powerUp"]} />
      <div>
      {list.map((form: any)=>(
        <div key={form.id} className='grid grid-cols-3 gap-2 bg-gray-100 rounded-md px-4 py-2 mb-2'>
          <div>
              <h2 className="font-bold">{form.displayName}</h2>
                <h3 className='my-2'><span className='font-semibold'>Type: </span>{form.type} <span> - {form.archetype}</span></h3>
          </div>
                <p className="mb-2">{form.description}</p>
                <div className="flex justify-center items-center">
                <Link href={`forms/${form.name}`} className="font-semibold hover:text-white bg-gray-400 rounded p-1"> Details</Link>
                </div>
      
        </div>
            ))}
      </div>
    </div>
  )
}
