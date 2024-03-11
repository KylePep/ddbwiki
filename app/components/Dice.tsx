import React, { useState } from 'react'

export default function Dice() {
  const [selectedDie, setSelectedDie] = useState('D4')
  const [result, setResult] = useState(null)

  const rollDie = ()=> {
    const maxNumber = parseInt(selectedDie.slice(1))
    const randomNumber = Math.floor(Math.random()*maxNumber) + 1
    setResult(randomNumber)
  }

  const selectDie = (selectDie: string)=> {
    setSelectedDie(selectDie)
  }

  return (
    <>
      <div className='grid grid-rows-1 grid-flow-col gap-2 bg-gray-200 rounded my-4 p-2'>
        
        <div className='flex flex-col items-center justify-center min-h-20'>
          <div className='mb-3'>{selectedDie}</div>
          <button onClick={rollDie} className='bg-gray-100 hover:bg-gray-200 px-4 py-1 mb-3 rounded-md'>Roll</button>
        <div>{result!== null ? `Result: `+ result : 'Roll your die!'}</div>
        </div>
        <div className='grid grid-rows-3 gap-1 grid-flow-col'>
          <button onClick={()=> setSelectedDie('D4')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded border-solid border-2 border-orange-500'>D4</button>
          <button onClick={()=> setSelectedDie('D6')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded'>D6</button>
          <button onClick={()=> setSelectedDie('D8')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded'>D8</button>
          <button onClick={()=> setSelectedDie('D10')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded'>D10</button>
          <button onClick={()=> setSelectedDie('D12')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded'>D12</button>
          <button onClick={()=> setSelectedDie('D20')} className='bg-gray-400 hover:bg-gray-300 py-1 text-center rounded'>D20</button>
        </div>
      </div>
    </>
  )
}
