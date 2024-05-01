import React from 'react'

interface WaitingProps{
  currentCharactersTurn: string,
  endTurn: any,
  data: any
}

export default function PlayerMenuWaiting({currentCharactersTurn, endTurn, data}: WaitingProps) {
  return (
    <>
    <div className='grid col-span-2'>
      <p className=''>{currentCharactersTurn} is taking action.</p>
      <button onClick={() => endTurn("Aspara")} className='bg-blue-400 rounded px-2 py-1 hover:text-white'>My turn {data.turnData.totalTurns}</button>
    </div>
    <div className='grid grid-rows-3 gap-1'>
        <button className='bg-blue-400 rounded hover:text-white'>Opt1</button>
        <button className='bg-blue-400 rounded hover:text-white'>Opt2</button>
        <button className='bg-blue-400 rounded hover:text-white'>Opt3</button>
    </div>
  </>
  )
}
