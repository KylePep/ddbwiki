'use client'
import { MOVE_TYPES } from "../../shared/constants/index";

import React, { useState } from 'react'

export default function movesPage() {
  const [sortedBy, setSortedBy] = useState("none")
  let MOVES = MOVE_TYPES

  if(sortedBy == "none"){
    MOVES = MOVE_TYPES
  } else if (sortedBy == "Attack"){
    MOVES = MOVE_TYPES.filter((m)=> m.type == "attack")
  } else if (sortedBy == "Support"){
    MOVES = MOVE_TYPES.filter((m)=>m.type == "support")
  } else if (sortedBy == "Physical"){
    MOVES = MOVE_TYPES.filter((m)=>m.style == "physical")
  } else if (sortedBy == "Energy"){
    MOVES = MOVE_TYPES.filter((m)=>m.style == "energy")
  }

  const sortBy = ( sortBy: string) =>{
    if (sortedBy === sortBy) sortBy = "none"
    setSortedBy(sortBy)
  }

  return (
    <main>
      <div>
        <h1 className='mb-3'>The moves a character can perform on their adventure in Dungeons and DragonBalls!</h1>
        <div className="flex justify-between my-3 font-bold bg-blue-400 px-4 py-2 rounded-md ">
          {["Attack", "Support", "Physical", "Energy"].map((sort: any) => (
            <button className="hover:text-white" onClick={()=>sortBy(sort)} key={sort}>{sort}</button>
          ))}
        </div>
        <div>
          {MOVES.map((move: any)=>(
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
