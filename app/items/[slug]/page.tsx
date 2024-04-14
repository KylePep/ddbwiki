import { ITEM_TYPES } from '@/shared/constants'
import Link from 'next/link'
import React from 'react'

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = (slug:string) => {
  const data = ITEM_TYPES.find((m) => m.name == slug)
  if (!data){
    return null
  }
  return data
}


export default function page(url: URL) {
  const item = fetchDetails(url.params.slug)
  return (
    // <div>
    //             {list.map((item: any)=>(
    //         <div key={item.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
    //             <h2 className="font-bold">{item.displayName}</h2>
    //             <p className='mb-2'>{item.description}</p>
    //             <p className='mb-2 mx-8'>{item.extraDescription}</p>

    //             <div>
    //                 <p className='border-solid border-2 border-b-black'><span className='font-semibold'>Details </span></p>
    //                 <h3 className='my-2'><span className='font-semibold'>Type: </span>{item.type} <span> - {item.subType}</span></h3>
                    
    //                 <h3 className='font-semibold'>Effect:</h3>
    //                 <p>{item.effect}</p>
    //                 <p>{item.descriptionParams}</p>
    //             </div>
    //       </div>
    //           ))}
    // </div>

  <div>
    <div className='my-4'>
    <Link href={"/items"} className="bg-gray-400 rounded font-semibold hover:text-white px-2 py-1 my-3">Item List</Link>
    </div>
        {item ? 
      <div>
        <div key={item.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
              <h2 className="font-bold">{item.displayName}</h2>
                <p className="mb-2">{item.description}</p>
                <p className="mb-2 mx-8">{item.extraDescription}</p>

                <div>
                    <p className='border-solid border-2 border-b-black'><span className='font-semibold'>Details </span></p>
                    <h3 className='my-2'><span className='font-semibold'>Type: </span>{item.type} <span> - {item.subType}</span></h3>
                    
                    <h3 className='font-semibold'>Effect:</h3>
                    <p>{item.effect}</p>
                    <p>{item.descriptionParams}</p>
                </div>

        </div>
      </div>
      :
      <div>
        This item was not found.
      </div>
      }
  </div>
  )
}
