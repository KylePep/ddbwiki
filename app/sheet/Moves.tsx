
import { ARCHETYPE_TYPES, MOVE_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React from 'react'
interface formProps{
  form: any
}

export default function Moves({form}:formProps) {
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
  <div>
    <p className='font-bold'>Moves</p>
  <div className='bg-white me-10 py-2'>
    <ul>

      { movesList.length ? (
              movesList.map((move: any) => (
                <li key={move.id}>{move.title}</li>
              ))
      ) : (
        <li>-No Moves-</li>
      )
    }

    </ul>
  </div>
</div>
  )
}
