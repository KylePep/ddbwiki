import React from 'react'

interface formProps {
  form: any,
  handleStatsChange: any
}

export default function Stats({form, handleStatsChange}: formProps) {
  return (
    <div>
              <p  className='text-center font-bold'>
                Stats
              </p>
              <p className='text-center'>
                - {form.stats.mod} -
              </p>
              
              <div className='grid grid-rows-3 grid-flow-col gap-2'>                
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="spirit">Spirit </label>
                  <input onChange={handleStatsChange} value={form.stats.spirit} className='text-center' type="number" name="stats.spirit" id="spirit" min={1} max={5}/>
                  <div className='flex flex-row m-auto gap-2'>
                  </div>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="power">Power </label>
                  <input onChange={handleStatsChange} value={form.stats.power} className='text-center' type="number" name="stats.power" id="power" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="toughness">Toughness </label>
                  <input onChange={handleStatsChange} value={form.stats.toughness} className='text-center' type="number" name="stats.toughness" id="toughness" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="ki">Ki </label>
                  <input onChange={handleStatsChange} value={form.stats.ki} className='text-center' type="number" name="stats.ki" id="ki" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="agility">Agility </label>
                  <input onChange={handleStatsChange} value={form.stats.agility} className='text-center' type="number" name="stats.agility" id="agility" min={1} max={5}/>
                </div>
              </div>
    </div>
  )
}