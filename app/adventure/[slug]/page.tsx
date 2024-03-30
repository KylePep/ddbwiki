import Link from 'next/link'
import React from 'react'
import { ADVENTURE_TYPES } from '@/shared/constants'

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  const data = ADVENTURE_TYPES.find((a) => a.id == slug)
  if (!data){
    return null
  }
  return data
}

export default function page(url:URL) {
  const data = fetchDetails(url.params.slug)
  return (
    <div>
      <div className='bg-blue-200 rounded-t p-2 font-bold text-center'>
        <Link href={`/adventure`}>
          <button className='hover:text-white'>Return to adventures</button>
        </Link>
      </div>
      <div className='bg-blue-300 rounded-b p-2 flex justify-around'>
        <Link href={`/adventure/treeOfMight`}>
          <button className='font-bold hover:text-white'>Tree of Might</button>
        </Link>
        <Link href={`/adventure/worldsStrongest`}>
        <button className='font-bold hover:text-white'>{`World's`} Strongest</button>
        </Link>
        <Link href={`/adventure/lordSlug`}>
        <button className='font-bold hover:text-white'>Lord Slug</button>
        </Link>
        <Link href={`/adventure/garlicJr`}>
        <button className='font-bold hover:text-white'>Garlic Jr.</button>
        </Link>
      </div>
      
      { 
        data ?
        
          <div>
          <h1 className='font-bold text-xl text-center bg-white rounded p-4'>
            {data.title}
            </h1>
            <div className='bg-white rounded p-4 my-2'>
              <p>summary of the {data.title} adventure.</p>
              <p>{data.summary}</p>
            </div>
            <p>
            There will need to be an entire dataType created for adventures and the other dataTypes outlined in the adventure page
            </p>
          </div>
          :
          <div> This adventure does not exist.</div>
      }
    </div>
  )
}
