import Link from 'next/link'
import React from 'react'

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  return slug
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
      <h1>
      This is the {data} page
      </h1>
    </div>
  )
}
