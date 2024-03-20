import React from 'react'
interface formProps{
  form: any,
  handleChange: any
}

export default function Description({form, handleChange}:formProps) {
  return (
    <div className='flex flex-col'>
    <label className='font-bold' >Description</label>
    <textarea onChange={handleChange} value={form.description} className='resize-none me-10 px-4' name="description" id="description" cols={30} rows={4} placeholder='Provide a brief description of your character here...'></textarea>
  </div>
  )
}
