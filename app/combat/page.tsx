import React from 'react'

export default function page() {
  return (
    <div>
      <h1>
        On this page you can learn all about Dungeons & DragonBalls Combat system!
      </h1>
      <div className='bg-white rounded my-2 p-2'>
        <p>The combat system for D&DB is turn based. Although it does have {`it's`} unique qualities especially when on an adventure with other players.</p>
        <p className='my-2'>
          When playing together with other adventurers, you will be playing asynchronously. That is to say that you will most likely not all be able to play at the exact same time. After all, One of the key features of D&DB is the ability for multiple people to play through out the day, but still contribute to the same story being told.
        </p>
        <p className='my-2'>
          Players will have plenty of combat to participate in when a battle starts and you {`won't`} be waiting days just to do your next attack. That is because D&DB changes the approach to the ordering of encounters and how attacks are handled.
        </p>
        <p className='my-2'>
          Primarily based on the Agility stat, the turns will be executed in highest to lowest order.
        </p>
        <p className='my-2'>
          Before combat begins during the next session, each player will be told what happened during everyone elses turn. 
        </p>
      </div>
      <div className='my-4 bg-white rounded p-4'>
        <p>Example Battle Window</p>
        <div className='bg-gray-500 border border-solid border-black rounded p-4'>
          <div className='text-lg font-bold text-center bg-gray-400 border border-solid border-black p-10'>
            <p className='mb-4'>
            TURLES
            </p>
            <p className='font-semibold text-l mb-4'>The low-class saiyan warrior remains still in the sky. Menace in his stare.</p>
            <div className='flex flex-col items-center'>
                    <p className='text-center'>Health</p>
                    <p className='bg-gray-700 border border-white text-white rounded w-fit px-2 py-1'>
                      {`[|] [|] [|] [|] [|] [|] [|] [|] [ ] [ ]`}
                    </p>
                </div>
          </div>
          <div className='my-2 text-center font-bold text-xl text-white'>
            <div className='bg-black border border-white rounded px-2 py-2'>
              <p className='text-lg'>Aspara Kamehameha</p>
              <p className='my-2'>
                {`-[ 6 ]-`}
              </p>
              <p className='text-lg'>Roll Result: </p>
              <p className='text-sm'>
                  Ka... Me... Ha... Me... HAAAA! Your Kamehame hits {`it's`} target dealing 2 points of damage!
              </p>
              <p className='text-sm'>{`( 1 point of sparking, extra damage chance. )`}</p>
            </div>
          </div>
          <div className='text-lg font-bold text-center mt-4 bg-gray-300 border border-solid border-black p-10'>
            <p className='mb-4'>ASPARA</p>
            <div className='flex justify-around mb-10'>
                <div>
                    <p className='text-center'>Health</p>
                    <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {`[|] [|] [|] [ ] [ ]`}
                    </p>
                </div>
                <div>
                  <p className='text-center'>Sparking</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {`[|] [ ] [ ] [ ] [ ]`}
                    </p>
                </div>
                <div>
                  <p className='text-center'>Rage</p>
                  <p className='bg-gray-700 border border-white text-white rounded px-2 py-1'>
                      {`[|] [ ] [ ]`}
                    </p>
                </div>
            </div>
            <div className='flex justify-around'>
              <div>
                <p className='mb-2'>ACTIONS</p>
                <ul>
                  <button className='bg-blue-300 px-2 py-1 rounded hover:text-white'>Kamehameha</button>
                </ul>
              </div>
              <div>
                <p className='mb-2'>ITEMS</p>
                <ul>
                  <button className='bg-blue-300 px-2 py-1 rounded hover:text-white'>Senzu Bean</button>
                </ul>
              </div>
              <div>
                <p className='mb-2'>ALLIES</p>
                <ul>
                  <button className='bg-blue-300 px-2 py-1 rounded hover:text-white'>Iggus</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
