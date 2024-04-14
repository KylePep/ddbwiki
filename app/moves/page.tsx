'use client'
import { MOVE_TYPES } from "../../shared/constants/index";

import React, { useState } from 'react'
import FilterList from "../components/FilterList";
import Link from "next/link";
import PreviewCard from "../components/PreviewCard";


export default function movesPage() {
  const [list, setList] = useState(MOVE_TYPES)

  return (
    <main>
      <div>
        <h1 className='mb-3 bg-gray-100 rounded p-4'>The moves a character can perform on their adventure in Dungeons and DragonBalls!</h1>
          <FilterList LIST_TYPE={MOVE_TYPES} list={list} setList={setList} categoryFilterArr={["type.attack", "type.support", "subType.physical", "subType.energy"]} />
          {/* Minimum view */}
        <div>
          {list.map((move: any)=>(
        <PreviewCard key={move.id} content={move} pathName='moves'/>

          // <div key={move.id} className='grid grid-cols-3 gap-2 bg-gray-100 rounded-md px-4 py-2 mb-2'>
          //   <div>
          //       <h2 className="font-bold">{move.displayName}</h2>
          //         <h3 className='my-2'><span className='font-semibold'>Type: </span>{move.type} <span> - {move.subType}</span></h3>
          //   </div>
          //         <p className="mb-2">{move.description}</p>
          //         <div className="flex justify-center items-center">
          //         <Link href={`moves/${move.name}`} className="font-semibold hover:text-white bg-gray-400 rounded p-1"> Details</Link>
          //         </div>

          // </div>
              ))}
        </div>
      </div>
    </main>
  )
}
