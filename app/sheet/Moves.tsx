import React from 'react'
interface formProps{
  form: any
}

export default function Moves({form}:formProps) {
  return (
    <div>
    <p className='font-bold'>Moves</p>
  <div className='bg-white me-10 py-2'>
    <ul>
      {form.moves.map((move: any)=> (
      <li key={move}>{move}</li>
      ))}
    </ul>
  </div>
</div>
  )
}
