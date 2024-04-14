import Link from 'next/link'
import React from 'react'

type previewProps = {
    content: any,
    pathName: string
}

export default function PreviewCard({content, pathName}:previewProps ) {
  const secondType = () => {
    let type = ""
    if (pathName != "enemies") {
      type = "subType"
    } else {
      type = "archetype"
    } 
    return type;
  }
  return (
    <Link href={`${pathName}/${content.name}`}>
      <div key={content.id} className='grid grid-cols-2 gap-2 bg-gray-100 rounded-md px-4 py-2 mb-2'>
        <div className=''>
          <h2 className="font-bold">{content.displayName}</h2>
          <h3 className='my-2'><span className='font-semibold'>Type: </span>{content.type} <span> - {secondType()}</span></h3>
        </div>
        <div className="mb-2">{content.description}</div>

      </div>
    </Link>
  )
}
