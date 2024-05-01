import React from 'react'

export default function SpecialResources() {
  return (
    <div className=' bg-white p-4 rounded'>
      <h1 className='font-bold'>Special Resources:</h1>
      <h1>Characters have access to special resources depending on archetypes and stats. The universal resource is the <i>SPARKING METER</i> </h1>
      <h2> Archetype Resources:</h2>
      <ul>
        <li> <div className='font-medium'>Heroic Counters
        </div> 
        <p> - helps this archetype rise to the occasion, usually to save an ally.</p>
        </li>
        <li><div className='font-medium'>Prank Counters
        </div>
        <p>
           - used to distract enemies or interfere with plans.
          </p>
           </li>
        <li><div className='font-medium'>Pride Counters
        </div> 
        <p>
          - helps prevent certain status effects and withstand deadly encounters.
          </p>
          </li>
        <li><div className='font-medium'>Rage Counters
        </div>
         <p>
           - react to danger with heightened damage capabilities.
          </p>
           </li>
      </ul>
    </div>
  )
}
