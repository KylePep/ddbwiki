import { ENEMY_TYPES } from '@/shared/constants'
import Link from 'next/link'
import React from 'react'
type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  const data = ENEMY_TYPES.find((m) => m.name == slug)
  if (!data){
    return null
  }
  return data
}


export default function page(url: URL) {
  const enemy = fetchDetails(url.params.slug)
  return (
    
  <div>
    <div className='my-4'>
    <Link href={"/enemies"} className="bg-gray-400 rounded font-semibold hover:text-white px-2 py-1 my-3">Enemy List</Link>
    </div>
        {enemy ? 
      <div>
          <div key={enemy.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold text-xl">{enemy.displayName}</h2>
                <h3><span className='font-semibold'>Adventure: </span>{enemy.adventure}</h3>

                <h3><span className='font-semibold'>Allegiance: </span>{enemy.allegiance}</h3>
                <h4><span className='font-semibold'>Appearance: </span>{enemy.appearance}</h4>
                <h4><span className='font-semibold'>Background: </span>{enemy.description}</h4>

                <div>
                  <p className='border-solid border-2 border-b-black font-semibold my-4'>Details</p>
                </div>

                <h3 className='capitalize'><span className='font-semibold'>Type: </span>{enemy.type}</h3>
                <h3 className='capitalize'><span className='font-semibold'> Origin:  </span> {enemy.origin} <span className='font-semibold'>Archetype: </span> {enemy.archetype}</h3>

                <h3 className='capitalize'><span className='font-semibold'>Base Level: </span>{enemy.baseLevel}</h3>
                <h3 className='font-semibold'>Base Stats:</h3>
                <div className='flex justify-around font-semibold'>
                  <p>Spirit - <span className='font-normal'>{enemy.baseStats.spirit}</span></p>
                  <p>Ki - <span className='font-normal'>{enemy.baseStats.ki}</span></p>
                  <p>Power - <span className='font-normal'>{enemy.baseStats.power}</span></p>
                  <p>Agility - <span className='font-normal'>{enemy.baseStats.agility}</span></p>
                  <p>Toughness - <span className='font-normal'>{enemy.baseStats.toughness}</span></p>
                </div>
                
                <div className='grid grid-cols-2 gap-2 mt-2'>
                <ul><span className='font-semibold'>Unique Moves:</span>
                  { enemy.uniqueMoves.map((move: any)=>(
                    <li key={move}>{move}</li>
                  ))
                  }
                </ul>
                <ul><span className='font-semibold'>Equipment:</span>
                  { enemy.equipment.map((item: any)=>(
                    <li key={item}>{item}</li>
                  ))
                  }
                </ul>
                </div>
          </div>
      </div>
      :
      <div>
        This enemy was not found.
      </div>
      }
  </div>
  )
}