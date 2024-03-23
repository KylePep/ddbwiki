
import { ARCHETYPE_TYPES, MOVE_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import Modal from '../components/Modal'
interface formProps{
  form: any
}

export default function Moves({form}:formProps) {
  const [toggle, setToggle] = useState(false)
  const [content, setContent] = useState('')

  const origin = ORIGIN_TYPES.find((o)=> o.title === form.origin)
  const archetype = ARCHETYPE_TYPES.find((a) => a.title === form.archetype)

  const originMoves = origin ? origin.moves : []
  const archMoves = archetype ? archetype.moves : []

  const moves = originMoves.concat(archMoves)
  
  const movesList = moves.map((om) => {
    const moveById = MOVE_TYPES.find((m) => m.id === om)
    return moveById
  })

  console.log('[origin]', origin,'[arch]', archetype,'[MOVES]', moves, '[MOVES LIST]', movesList)

  return (
  <div className='bg-gray-300 p-2 rounded-md mb-3'>
    <p className='font-bold'>Moves</p>
  <div className='bg-white me-10 py-2 w-full'>
    <ul>

      { movesList.length ? (
              movesList.map((move: any) => (
                <li className='group hover:cursor-pointer hover:text-gray-800'  key={move.id}>{move.title}
                <span className='invisible group-hover:visible text-black ms-2'><button onClick={(e)=> {setToggle(true), setContent( move)}} className='bg-blue-200 hover:bg-blue-300 px-1 rounded'>Info</button></span>
                </li>
              ))
      ) : (
        <li>-No Moves-</li>
      )
    }

    </ul>
  </div>
  {toggle && <Modal type="describe"  content = {content} setToggle = {setToggle} />}

</div>
  )
}
