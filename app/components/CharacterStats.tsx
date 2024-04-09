import React from 'react'

export default function CharacterStats() {
  return (
    <div className=' bg-white p-4 rounded'>
      <h1 className='text-xl font-bold mb-2'>CHARACTER STATS</h1>
      <div className='text-sm grid gap-4 grid-cols-1'>

        <p>Stats that are above 3 have a positive effect, stats that are below 3 have a negative effect and 3 is neutral.</p>
        
        <div>
          <p className='font-semibold text-base mb-1'>Power <span className='font-normal text-sm'>- A measure of a characters strength.</span></p>
          <p>A characters power will directly affect the physical damage that they can do and help them overcome an opponents challenges.</p>
        </div>

        <div>
          <p className='font-semibold text-base mb-1'>Toughness <span className='font-normal text-sm'>- A measure of a characters sturdiness.</span></p>
          <p>A characters toughness will directly affect the damage taken from an opponents attacks and the ability to defend.</p>
        </div>

        <div>
          <p className='font-semibold text-base mb-1'>Agility <span className='font-normal text-sm'>- A measure of a characters speed.</span></p>
          <p>A characters agility directly affects turn order and the range of some physical attacks.</p>
        </div>

        <div>
          <p className='font-semibold text-base mb-1'>Ki <span className='font-normal text-sm'>- A measure of a characters energy.</span></p>
          <p>A characters ki directly affects the energy damage that they can do and the amount of energy they have access to.</p>
        </div>

        <div>
          <p className='font-semibold text-base mb-1'>Spirit <span className='font-normal text-sm'>- A measure of a characters charisma.</span></p>
          <p>A characters spirit directly affects the effectiveness of support moves and resilience to being affected by opponent support moves.</p>
        </div>

      </div>
      
    </div>
  )
}
