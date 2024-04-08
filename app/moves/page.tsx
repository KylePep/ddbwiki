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
          <FilterList LIST_TYPE={MOVE_TYPES} list={list} setList={setList} categoryFilterArr={["type.attack", "type.support", "subType.physical", "subType.energy"]} />
        <div>
          {list.map((move: any)=>(
          <div key={move.id} className='bg-gray-100 rounded-md px-4 py-2 mb-2'>
                <h2 className="font-bold">{move.displayName}</h2>
                  <p className="mb-2">{move.description}</p>
                  <p className="mb-2 mx-8">{move.extraDescription}</p>

                <div>
                  <p className="border-solid border-2 border-b-black font-semibold">Details</p>
                  <h3 className='my-2'><span className='font-semibold'>Type: </span>{move.type} <span> - {move.subType}</span></h3>
                  <div className="flex justify-between">
                    <p><span className="font-semibold">Damage: </span>{move.damage}</p>
                    <p><span className="font-semibold">Cost: </span>{move.cost}</p>
                    <p><span className="font-semibold">Accuracy: </span>{move.accuracy}</p>
                  </div>
                  <h3 className="font-semibold">Effect: </h3>
                  <p>{move.effect}</p>
                  <p>{move.descriptionParams}</p>

                </div>

          </div>
              ))}
        </div>
      </div>
    </main>
  )
}
