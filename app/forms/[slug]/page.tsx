import { AWAKEN_TYPES } from '@/shared/constants'
import Link from 'next/link'
import React from 'react'
type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  const data = AWAKEN_TYPES.find((m) => m.name == slug)
  if (!data){
    return null
  }
  return data
}


export default function page(url: URL) {
  const form = fetchDetails(url.params.slug)
  return (

  <div>
      <div className='my-4'>
      <Link href={"/forms"} className="bg-gray-400 rounded font-semibold hover:text-white px-2 py-1 my-3">Awakening List</Link>
      </div>
          {form ? 
        <div>
    <div key={form.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
    <h2 className="font-bold">{form.displayName}</h2>
    <p className='mb-2'>{form.description}</p>
    <p className='mb-2 mx-8'>{form.extraDescription}</p>

    <div>
        <p className='border-solid border-2 border-b-black'><span className='font-semibold'>Details </span></p>
        <h3 className='my-2'><span className='font-semibold'>Type: </span>{form.type}</h3>

        <p>
        <span className='font-semibold'>Achievable: </span>
        {form.useable.map((use: any, index: number) => (
          <span key={use} className='capitalize'>
            {index === form.useable.length - 1 ? use : `${use}, `}
          </span>
        ))}
      </p>

        <p><span className='font-semibold'>Requirements: </span>{form.reqParams.map((req: any, index: number) =>(
        <span key={req} className='capitalize'>{ index === form.reqParams.length -1 ? req : `${req},`} </span>
        ))}</p>

        <p><span className='font-semibold'>Upkeep: </span>{form.upkeep.map((up: any, index: number) =>(
        <span key={up} className='capitalize'>{ index === form.upkeep.length -1 ? up : `${up},`}  </span>
        ))}</p>

        <p><span className='font-semibold'>Benefits: </span>{form.positives.map((posi: any, index: number) =>(
        <span key={posi} className='capitalize'>{ index === form.positives.length -1 ? posi : `${posi},`}  </span>
        ))}</p>

        <p><span className='font-semibold'>Draw backs: </span>{form.negatives.map((negi: any, index: number) =>(
        <span key={negi} className='capitalize'>{ index === form.negatives.length -1 ? negi : `${negi},`}  </span>
        ))}</p>

        <p><span className='font-semibold'>Moves: </span>{form.moves.map((move: any, index: number) =>(
        <span key={move} className='capitalize'>{ index === form.moves.length -1 ? move : `${move},`}  </span>
        ))}</p>

        <p><span className='font-semibold'>Disabled Moves: </span>{form.moveBlacklist.map((blackList: any, index: number) =>(
        <span key={blackList} className='capitalize'>{ index === form.moveBlacklist.length -1 ? blackList : `${blackList},`}  </span>
        ))}</p>

    </div>
  </div>
      </div>
      :
      <div>
        This Awakening was not found.
      </div>
      }
  </div>
  )
}

