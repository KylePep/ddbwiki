import React from 'react'
import { ORIGIN_TYPES } from '@/shared/constants'
import { ARCHETYPE_TYPES } from '@/shared/constants'
interface formProps{
  form: any
  handleChange: any
}

export default function Attributes({form, handleChange}:formProps) {
  return (
    <div>
    <div className='grid grid-cols-3 grid-flow-row gap-2 bg-gray-300 p-2 rounded-md mb-3'>


<div>
    <label htmlFor="name" className='font-bold'>Name </label>
      <div>
        <input onChange={handleChange} value={form.name}  className='w-full ps-2' type="text" name="name" id="name" minLength={1} maxLength={20}/>
    </div>
</div>

<div className=''>
    <label htmlFor="name" className='font-bold'>Origin </label>
      <div>
        <select className='w-full' onChange={handleChange} value={form.origin} name="origin" id="origin">
          {ORIGIN_TYPES.map((origin: any)=> (
        <option key={origin.displayName}>{origin.displayName}</option>
        ))}
        </select>
    </div>
  </div>


<div className=''>
    <label htmlFor="name" className='font-bold'>Archetype </label>
      <div>
      <select className='w-full' onChange={handleChange} value={form.archetype} name="archetype" id="archetype">
          {ARCHETYPE_TYPES.map((arch: any)=> (
        <option key={arch.displayName}>{arch.displayName}</option>
        ))}
        </select>
    </div>
  </div>

{/* <div className='col-span-3'>
    <label htmlFor="level" className='font-bold'>Level </label>
      <div>
        <input onChange={handleChange} value={form.level} className='ps-2' type="number" name="level" id="level" min={1} max={5} placeholder='1'/>
    </div>
</div> */}

  <div>
    <label htmlFor="pronouns" className='font-bold'>Pronouns </label>
      <div>
        <select  onChange={handleChange} value={form.pronouns} className='ps-1 w-full' name="pronouns" id="pronouns">
          <option value="he|him">he | him</option>
          <option value="she|her">she | her</option>
          <option value="they|them">they | them</option>
        </select>
    </div>
  </div>

{/* <div className='flex'> */}
      <div>
    <label htmlFor="bodyType" className='font-bold'>Body Type </label>
      <div>
          <select className='w-full' onChange={handleChange} value={form.bodyType} name="bodyType" id="bodyType">
            <option value="masculine">Masculine</option>
            <option value="feminine">Feminine</option>
            <option value="neither">Neither</option>
          </select>
      </div>
    </div>

      <div>
        <label htmlFor="height" className='font-bold'>Height </label>
          <div>
              <select className='w-full' onChange={handleChange} value={form.height} name="height" id="height">
                <option value="average">Average</option>
                <option value="short">Short</option>
                <option value="veryShort">Very Short</option>
                <option value="tall">Tall</option>
                <option value="veryTall">Very Tall</option>
              </select>
          </div>
        </div>
      {/* </div> */}
    </div>
    </div>
    
  )
}
