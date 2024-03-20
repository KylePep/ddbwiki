import React from 'react'
interface formProps{
  form: any
}

export default function Items({form}:formProps) {
  return (
    <div>
    <p className='font-bold'>Inventory</p>
  <div className='bg-white me-10 py-2'>
    <ul>
      {form.inventory.map((item: any)=>(
      <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
</div>
  )
}
