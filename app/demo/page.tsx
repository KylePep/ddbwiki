import { DEMO_DATA } from '@/shared/constants'
import React from 'react'

const data = DEMO_DATA

export default function page() {
  return (
    <div>

      <div className='bg-gray-100 rounded p-8'>
        <p className='text-lg font-semibold text-center mb-4'>The Dungeons & DragonBalls Demo</p>
        <p className='text-center'>Experience a one on one battle between the character Aspara and Turles!</p>
      </div>

      <div className='my-4 bg-white rounded p-4 grid grid-cols-1 '>
        <div className='bg-gray-500 border border-solid border-black rounded p-4'>
          <div className='text-lg font-bold text-center bg-gray-400 border border-solid border-black p-2'>
            <p className='mb-4'>
            enemyName
            </p>
            <p className='font-semibold text-l mb-4'>Enemy state description.</p>
            <div className='flex flex-col items-center'>
                    <p className='text-center'>Health</p>
                    <p className='bg-gray-700 border border-white text-white rounded w-fit px-2 py-1'>
                      {`[|] [|] [|] [|] [|] [|] [|] [|] [ ] [ ]`}
                    </p>
                </div>
          </div>
          <div className='my-2 text-center font-bold text-xl text-white'>
            <div className='bg-black border border-white rounded px-2 py-2'>
              <p className='text-lg'>characterName: Action</p>
              <p className='my-2'>
                {`-[ Roll ]-`}
              </p>
              <p className='text-lg'>Action Result: </p>
              <p className='text-sm'>
                  Action result description
              </p>
            </div>
          </div>
          <div className='text-lg font-bold text-center mt-4 bg-gray-300 border border-solid border-black p-2'>
            <p className='mb-4'>{data.player.name}</p>
                <div>
                    <p className='text-center'>Health</p>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1 mx-2'>
                      {`[|] [|] [|] [|] [|] [|] [|]`}
                    </p>
                </div>
            <div className='flex justify-around mb-10'>
                <div>
                  <p className='text-center'>Sparking</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {`[|] [ ] [ ] [ ] [ ]`}
                    </p>
                </div>
                <div>
                  <p className='text-center'>archCounter</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {`[|] [|] [|]`}
                    </p>
                </div>
            </div>
            <div className='flex justify-around'>
              <div>
                <button className='mb-2 bg-blue-400 px-2 py-1 rounded hover:text-white'>ACTIONS</button>
              </div>
              <div>
                <button className='mb-2 bg-blue-400 px-2 py-1 rounded hover:text-white'>ITEMS</button>
              </div>
              <div>
                <button className='mb-2 bg-blue-400 px-2 py-1 rounded hover:text-white'>ALLIES</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
