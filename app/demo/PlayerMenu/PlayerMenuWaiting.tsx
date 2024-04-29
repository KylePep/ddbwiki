import React from 'react'

interface WaitingProps{
  currentCharactersTurn: string,
  endTurn: any,
  data: any
}

export default function PlayerMenuWaiting({currentCharactersTurn, endTurn, data}: WaitingProps) {
  return (
    <>
    <p>{currentCharactersTurn} is taking action.</p>
    <button onClick={() => endTurn("Aspara")} className='bg-blue-400 rounded px-2 py-1 hover:text-white'>My turn {data.turnData.totalTurns}</button>
  </>
  )
}
