import React from 'react'

export default function CharacterActions() {
  return (
    <div className='bg-white p-4 rounded'>
      <h1 className='text-lg font-bold mb-4'>CHARACTER ACTIONS</h1>

<div className='grid gap-4 grid-cols-1'>

      <div>
        <p className='font-bold mb-1'>Moves:</p>
        <ul className='list-disc text-sm'>
          <li>Moves can be performed during a characters turn and will use a resource, typically a Ki point.</li>
          <li>Moves require a target, the available resource, and the characters active turn to be preformed.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Weapons:</p>
        <ul className='list-disc text-sm'>
          <li>Weapons can have passive effects that do things like raise damage values.</li>
          <li>Weapons can also come with moves only accessible while they are equipped.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Voting:</p>
        <ul className='list-disc text-sm'>
          <li>During an adventure characters will have to make a variety of choices and these will be put to a vote.</li>
          <li>A vote will be open for a period of time determined by the type of adventure. Typically a voting period 18 hours, which is a standard gaming session interval.</li>
          <li>To cast a vote a player will have to follow the on screen instructions to select the desired outcome and possibly write out their response.</li>
        </ul>
      </div> 

      <div>
        <p className='font-bold mb-1'>Custom response:</p>
        <ul className='list-disc text-sm'>
          <li>Through out an adventure players will be given the opportunity to make a custom response to an event or dialogue prompt.</li>
          <li>These responses are displayed to the entire party in the context of the story.</li>
          <li>A prefabricated response can be selected if one is not written.</li>
        </ul>
      </div> 

</div>

</div>
  )
}
