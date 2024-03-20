import React from 'react'
interface formProps{
  form: any
}

export default function Forms({form}:formProps) {
  return (
    <div>
    <p className='font-bold'>Forms</p>
  <div className='bg-white me-10 py-2'>
    <ul>
      <li>Great Ape</li>
    </ul>
  </div>
</div>
  )
}
