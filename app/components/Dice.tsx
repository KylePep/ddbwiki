import React, { useState } from 'react'

export default function Dice() {
  const [selectedDie, setSelectedDie] = useState('D4')
  const [result, setResult] = useState<number | null>(null)

  const rollDie = ()=> {
    const maxNumber = parseInt(selectedDie.slice(1))
    const randomNumber = Math.floor(Math.random()*maxNumber) + 1
    
    setResult(randomNumber)
  }

  const selectDie = (selectDie: string)=> {
    setSelectedDie(selectDie)
    setResult(null)
  }

  return (
    <>
      <div className='grid grid-rows-1 grid-flow-col gap-2 bg-gray-200 rounded my-4 p-2'>
        
        <div className='flex flex-col items-center justify-center min-h-20'>
          <div className='mb-3'>{selectedDie}</div>
          <button onClick={rollDie} className='bg-blue-400 hover:bg-blue-300 px-4 py-1 mb-3 rounded-md font-bold'>ROLL</button>
        <div>{result!== null ? `- ${result} -` : 'Roll your die!'}</div>
        </div>
        <div className='grid grid-rows-3 gap-1 grid-flow-col'>
          {['D4','D6','D8','D10','D12','D20'].map(dieType => (
            <button 
            key={dieType}
            className={`bg-orange-400 hover:bg-orange-300 py-1 text-center rounded ${selectedDie === dieType ? 'border-solid border-2 border-blue-500' : ''}`}
            onClick={()=> selectDie(dieType)}
            >
              {dieType}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
