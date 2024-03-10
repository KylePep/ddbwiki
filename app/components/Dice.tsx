import React, { useState } from 'react';

export default function Dice() {
  const [selectedDie, setSelectedDie] = useState('D4');
  const [result, setResult] = useState(null);

  const rollDie = () => {
    const maxNumber = parseInt(selectedDie.slice(1)); // Extract the number from selectedDie (e.g., D4 -> 4)
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    setResult(randomNumber);
  };

  return (
    <>
      <p>
        Function: Select a Die type and roll it. Get the result back listed as Result. The selected Dice will be outlined in orange.
      </p>

      <div className='grid grid-rows-1 grid-flow-col gap-2 bg-gray-200 rounded my-4 p-2'>

        <div className='flex flex-col items-center justify-center min-h-20'>
          <button className='bg-gray-100 hover:bg-gray-200 px-4 py-1 mb-3 rounded-md' onClick={rollDie}>
            Roll
          </button>
          <div>Result: {result !== null ? result : 'X'}</div>
        </div>

        <div className='grid grid-rows-3 gap-1 grid-flow-col'>
          {['D4', 'D6', 'D8', 'D10', 'D12', 'D20'].map(dieType => (
            <button
              key={dieType}
              className={`bg-gray-400 hover:bg-gray-300 py-1 text-center rounded ${selectedDie === dieType ? 'border-solid border-2 border-orange-500' : ''}`}
              onClick={() => setSelectedDie(dieType)}
            >
              {dieType}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
