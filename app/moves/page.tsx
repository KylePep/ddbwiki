'use client'
import { MOVE_TYPES } from "../../shared/constants/index";

import React, { useState } from 'react'

export default function movesPage() {
  const [sortedBy, setSortedBy] = useState("none")

  const sortBy = ( sortBy: string) =>{
    if (sortedBy === sortBy) sortBy = "none"
    setSortedBy(sortBy)
  }

  return (
    <main>
      <div>
        <h1 className='mb-3'>A list of moves in D&DB {sortedBy}</h1>
        <div className="flex justify-between my-3 font-bold bg-blue-400 px-4 py-2 rounded-md">
          {["Attack", "Support", "Physical", "Energy"].map((sort: any) => (
            <button className="hover:text-white" onClick={()=>sortBy(sort)} key={sort}>{sort}</button>
          ))}
        </div>
        <div>
          {MOVE_TYPES.map((move: any)=>(
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.title}</h2>
                <h3>Type: {move.type}</h3>
                <h4>Style: {move.style}</h4>
                <p>Description {move.description}</p>
          </div>
              ))}
        </div>
      </div>
    </main>
  )
}
