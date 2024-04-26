import React from 'react'

interface BossDisplayProps{
  Boss: any,
  data: any
}

export default function BossDisplay({Boss, data}:BossDisplayProps) {
  return (
    <>
          <div className=' text-center bg-gray-400 border border-solid border-black p-1'>
            <p className=''>
              {Boss.base?.displayName}
            </p>
            <p>
              {Boss.base.displayName}, appears to be full of energy. He looks ready to fight.
            </p>
                {/* <div>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      Health: {Boss.hp}
                    </p>
                </div>
            <div className='grid grid-cols-2 gap-1'>
                <div>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      Sparking: {Boss.sparkingMeter}
                    </p>
                </div>
                <div>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                  {Boss.base.archetype} Counter: {Boss.archCounter}
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
              <p>Distance: {data.adventureInstance.enemyData[0].distance}</p>
            </div> */}
          </div>
    </>
  )
}
