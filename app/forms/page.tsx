'use client'

import { AWAKEN_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import FilterList from '../components/FilterList'

export default function formPage() {
  const [list, setList] = useState(AWAKEN_TYPES)

  return (
    <main>
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
            <div key={form.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
            <h2 className="font-bold">{form.displayName}</h2>
            <p className='mb-2'>{form.description}</p>
            <p className='mb-2 mx-8'>{form.extraDescription}</p>

            <div>
                <p className='border-solid border-2 border-b-black'><span className='font-semibold'>Details </span></p>
                <h3 className='my-2'><span className='font-semibold'>Type: </span>{form.type}</h3>

                <p>
                <span className='font-semibold'>Achievable: </span>
                {form.useable.map((use: any, index: number) => (
                  <span key={use} className='capitalize'>
                    {index === form.useable.length - 1 ? use : `${use}, `}
                  </span>
                ))}
              </p>

                <p><span className='font-semibold'>Requirements: </span>{form.reqParams.map((req: any, index: number) =>(
                <span key={req} className='capitalize'>{ index === form.reqParams.length -1 ? req : `${req},`} </span>
                ))}</p>

                <p><span className='font-semibold'>Upkeep: </span>{form.upkeep.map((up: any, index: number) =>(
                <span key={up} className='capitalize'>{ index === form.upkeep.length -1 ? up : `${up},`}  </span>
                ))}</p>

                <p><span className='font-semibold'>Benefits: </span>{form.positives.map((posi: any, index: number) =>(
                <span key={posi} className='capitalize'>{ index === form.positives.length -1 ? posi : `${posi},`}  </span>
                ))}</p>

                <p><span className='font-semibold'>Draw backs: </span>{form.negatives.map((negi: any, index: number) =>(
                <span key={negi} className='capitalize'>{ index === form.negatives.length -1 ? negi : `${negi},`}  </span>
                ))}</p>

                <p><span className='font-semibold'>Moves: </span>{form.moves.map((move: any, index: number) =>(
                <span key={move} className='capitalize'>{ index === form.moves.length -1 ? move : `${move},`}  </span>
                ))}</p>

                <p><span className='font-semibold'>Disabled Moves: </span>{form.moveBlacklist.map((blackList: any, index: number) =>(
                <span key={blackList} className='capitalize'>{ index === form.moveBlacklist.length -1 ? blackList : `${blackList},`}  </span>
                ))}</p>



            </div>
      </div>
              ))}
      </div>
    </main>
  )
}
