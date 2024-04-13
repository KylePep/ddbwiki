import { MOVE_TYPES } from '@/shared/constants'
import Link from 'next/link'
import React from 'react'

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  const data = MOVE_TYPES.find((m) => m.name == slug)
  if (!data){
    return null
  }
  return data
}

// const enemyName = ((enemyName: string)=>{
//   const enemy =  ENEMY_TYPES.find((e) => e.name == enemyName)
//   return enemy?.displayName
// })

export default function page(url:URL) {
  const move = fetchDetails(url.params.slug)
  return (
    <div>
      <div className='my-4'>
      <Link href={"/moves"} className="bg-gray-400 rounded font-semibold hover:text-white px-2 py-1 my-3">Moves List</Link>
      </div>
          {move ? 
        <div>
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.displayName}</h2>
                  <p className="mb-2">{move.description}</p>
                  <p className="mb-2 mx-8">{move.extraDescription}</p>

                <div>
                  <p className="border-solid border-2 border-b-black font-semibold">Details</p>
                  <h3 className='my-2'><span className='font-semibold'>Type: </span>{move.type} <span> - {move.subType}</span></h3>
                  <div className="flex justify-between">
                    <p><span className="font-semibold">Damage: </span>{move.damage}</p>
                    <p className="capitalize"><span className="font-semibold">Cost: </span>{move.cost.value} {move.cost.type}</p>
                    <p><span className="font-semibold">Accuracy: </span>{move.accuracy}</p>
                  </div>
                  <h3 className="font-semibold">Effect: </h3>
                  <p>{move.effect}</p>
                  <p>{move.descriptionParams}</p>

                </div>

          </div>
        </div>
        :
        <div>
          This Move was not found.
        </div>
        }
    </div>
  )
}
