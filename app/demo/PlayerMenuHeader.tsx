import React from 'react'
import { ActivePlayer } from '../Types/ActivePlayer'

interface PlayerMenuHeaderProps {
  Player: ActivePlayer
}

export default function PlayerMenuHeader({Player}: PlayerMenuHeaderProps) {
  return (
    <div>
    <p className=''>{Player.name}</p>

          <div>
              <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
                Health: {Player.playerState.hp}
              </p>
          </div>

    <div className='grid grid-cols-2 gap-1'>
          <div>
            <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
                Sparking: {Player.playerState.sparkingMeter}
              </p>
          </div>


          <div>
            <p className='bg-neutral-700 border border-white text-white rounded px-2 py-1'>
            {Player.archetype} Counter: {Player.playerState.archCounter}
              </p>
          </div>
    </div>
</div>
  )
}
