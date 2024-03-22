import React from 'react'

interface formProps {
  form: any,
  handleStatsChange: any
}

export default function Stats({form, handleStatsChange}: formProps) {
  return (
    <div className='bg-gray-300 py-1 px-2 rounded-md mb-3'>

              <p  className='text-center font-bold'>
                Stats
              </p>

              <p className='text-center font-bold'>
                - {form.stats.mod} -
              </p>
              
              <div className='grid grid-cols-2 grid-flow-row gap-2 '> 

                <div className='flex flex-col '>
                  <label className='text-center font-bold' htmlFor="spirit">Spirit </label>
                  <input onChange={handleStatsChange} value={form.stats.spirit} className='text-center' type="number" name="stats.spirit" id="spirit" min={1} max={5}/>
                </div>

                <div className='flex flex-col '>
                  <label className='text-center font-bold' htmlFor="power">Power </label>
                  <input onChange={handleStatsChange} value={form.stats.power} className='text-center' type="number" name="stats.power" id="power" min={1} max={5}/>
                </div>

                <div className='flex flex-col '>
                  <label className='text-center font-bold' htmlFor="toughness">Tough </label>
                  <input onChange={handleStatsChange} value={form.stats.toughness} className='text-center' type="number" name="stats.toughness" id="toughness" min={1} max={5}/>
                </div>

                <div className='flex flex-col '>
                  <label className='text-center font-bold' htmlFor="ki">Ki </label>
                  <input onChange={handleStatsChange} value={form.stats.ki} className='text-center' type="number" name="stats.ki" id="ki" min={1} max={5}/>
                </div>

                <div className='flex flex-col col-span-2 m-auto'>
                  <label className='text-center font-bold' htmlFor="agility">Agility </label>
                  <input onChange={handleStatsChange} value={form.stats.agility} className='text-center' type="number" name="stats.agility" id="agility" min={1} max={5}/>
                </div>

              </div>
    </div>
  )
}
