import React from 'react'

export default function CharacterStats() {
  return (
    <div className=' bg-white p-4 rounded'>

      <h1 className='text-xl font-bold mb-2'>CHARACTER STATS</h1>

      <div className='text-sm grid gap-4 grid-cols-1'>

        <p>At creation characters have 3s in all stats, with 3 assignable points. A given stat can only be raised as high as 5 or as low as 1, lower a stat will give you more points to assign else where.</p>
        <p>It is possible for stats to reach 6 or 0, by item effects or equipment.</p>
        <div>
          <p>Stat level 6: +4 to its checks</p>
          <p>Stat level 5: +2 to its checks</p>
          <p>Stat level 4: +1 to its checks</p>
          <p>Stat level 3: +0 to its checks</p>
          <p>Stat level 2: -1 to its checks</p>
          <p>Stat level 1: -2 to its checks</p>
          <p>Stat level 0: -4 to its checks</p>
        </div>
        
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

        <div>
          <p className='font-semibold text-base'>Character descriptors</p>
          <p className='mb-1'>values used to help describe a character.</p>
          <div>
            <p><span className='font-semibold'>Pronouns</span> - He | Him - She | Her - They | Them</p>
            <p><span className='font-semibold'>Body Type</span> - Masculine - Feminine - Neither</p>
            <p><span className='font-semibold'>Height</span> - Very Tall - Tall - Average - Short - Very Short</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}
