
import { ARCHETYPE_TYPES, MOVE_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
interface formProps{
  form: any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Moves({form, handleChange}:formProps) {
  const [toggle, setToggle] = useState(false)
  const [content, setContent] = useState('')

  useEffect(()=>{

    const origin = ORIGIN_TYPES.find((o)=> o.displayName === form.origin)
    const archetype = ARCHETYPE_TYPES.find((a) => a.displayName === form.archetype)
  
    const originMoves = origin ? origin.moves : []
    const archMoves = archetype ? archetype.moves : []
  
    const moves = originMoves.concat(archMoves)
    
    const updatedMovesList = moves.map((om) => {
      const moveById = MOVE_TYPES.find((m) => m.name === om)
      return moveById
    })

    handleChange({
      target: {
        name: "moves",
        value: updatedMovesList
      }
    } as React.ChangeEvent<any> )

  }, [form.origin, form.archetype])

  const movesList = form.moves

  return (
  <div className='bg-gray-300 p-2 rounded-md mb-3'>
    <p className='font-bold'>Moves</p>
    <div className='bg-white me-10 py-2 w-full'>
  <ul>
    {movesList.map((move: any) => (
      <li key={move.id} className='group hover:cursor-pointer hover:text-gray-800'>
        {move.displayName}
        <span className='invisible group-hover:visible text-black ms-2'>
          <button onClick={(e)=> {setToggle(true), setContent( move)}} className='bg-blue-200 hover:bg-blue-300 px-1 rounded'>Info</button>
        </span>
      </li>
    ))}
    {movesList.length === 0 && <li>-No Moves-</li>}
  </ul>
</div>
  {toggle && <Modal type="describe"  content = {content} setToggle = {setToggle} />}

</div>
  )
}
