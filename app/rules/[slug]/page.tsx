import CharacterActions from '@/app/components/CharacterActions'
import CharacterAttributes from '@/app/components/CharacterAttributes'
import CharacterEffects from '@/app/components/CharacterEffects'
import CharacterStats from '@/app/components/CharacterStats'
import Link from 'next/link'
import React from 'react'
type URL = {
  params: {
    slug: string
  }
}

// const fetchDetails = (slug:string) => {
//   const data = MOVE_TYPES.find((m) => m.name == slug)
//   if (!data){
//     return null
//   }
//   return data
// }

export default function page(url:URL) {
  const path = url.params.slug
  return (
    <div>
      <div className='my-4'>
      <Link href={"/rules"} className="bg-gray-400 rounded font-semibold hover:text-white px-2 py-1 my-3">Rules</Link>
      </div>
      <div className='bg-blue-400 rounded flex justify-around p-2 my-2'>
        <Link href={"rules/stats"} className='font-bold hover:text-white'>Stats</Link>
        <Link href={"rules/attributes"} className='font-bold hover:text-white'>Attributes</Link>
        <Link href={"rules/actions"} className='font-bold hover:text-white'>Actions</Link>
        <Link href={"rules/effects"} className='font-bold hover:text-white'>Effects</Link>
      </div>
      <div className='bg-white p-4 rounded'>
        {path}
        { path === "stats" ? 
        <CharacterStats/> : ""
        }

        { path === "attributes" ? 
        <CharacterAttributes/> : ""
        }

        { path === "actions" ? 
        <CharacterActions/> : ""
        }

        { path === "effects" ? 
        <CharacterEffects/> : ""
        }

      </div>
    </div>
  )
}
