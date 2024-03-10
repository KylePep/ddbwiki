import React from 'react'

export default function Dice() {
  return (
    <>
      <div className='grid grid-rows-1 grid-flow-col gap-4 bg-gray-200 '>
        <div className='min-h-20 bg-red-500'>1</div>
        <div className='grid grid-rows-6 grid-flow-col'>
          <div>D4</div>
          <div>D6</div>
          <div>D8</div>
          <div>D10</div>
          <div>D12</div>
          <div>D20</div>
        </div>

      </div>
    </>
  )
}
