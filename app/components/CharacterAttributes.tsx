import React from 'react'

export default function CharacterAttributes() {
  return (
    <div className=' bg-white p-4 rounded'>
      <h1 className='text-lg font-bold mb-4'>CHARACTER ATTRIBUTES</h1>
      <p className='font-bold mb-2'>Health:</p>
      <ul className='list-disc text-sm'>
        <li>When health is reduced to zero, a character is out of combat unless they are recovered by a healing item such as a Senzu Bean.</li>
        <li>While out of combat, a character {`can't`} use attacks but can use some support moves.</li>
        <li>Health can be recovered by healing items, but {`can't`} be raised above {`it's`} max.</li>
      </ul>
    </div>
  )
}
