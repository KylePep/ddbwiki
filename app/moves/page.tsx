'use client'
import { MOVE_TYPES } from "../../shared/constants/index";

import React, { useState } from 'react'
import FilterList from "../components/FilterList";


export default function movesPage() {
  const [list, setList] = useState(MOVE_TYPES)

  return (
    <main>
      <div>
        <h1 className='mb-3'>The moves a character can perform on their adventure in Dungeons and DragonBalls!</h1>
          <FilterList LIST_TYPE={MOVE_TYPES} list={list} setList={setList} categoryFilterArr={["type.attack", "type.support", "style.physical", "style.energy"]} />
        <div>
          {list.map((move: any)=>(
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.title}</h2>
                <h3><span className="font-semibold">Type: </span>{move.type}</h3>
                <h4><span className="font-semibold">Style: </span> {move.style}</h4>
                <p><span className="font-semibold">Description: </span>{move.description}</p>
          </div>
              ))}
        </div>
      </div>
    </main>
  )
}
