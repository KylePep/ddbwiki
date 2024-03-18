import { split } from 'postcss/lib/list'
import React, { useState } from 'react'

interface filterListProps{
  LIST_TYPE: object[],
  categoryFilterArr: string[]
}

function FilterList({LIST_TYPE, categoryFilterArr} : filterListProps) {
  const [sortedBy, setSortedBy] = useState("none")
  
  const filterLables = categoryFilterArr.map(str=> {
    const words = str.split('.')
    const word = words[1].charAt(0).toUpperCase() + words[1].slice(1)
    return word
  })

  // let LIST = LIST_TYPE

  // if(sortedBy == "none"){
  //   LIST = LIST_TYPE
  // } else if (sortedBy == "Equipment"){
  //   LIST = LIST_TYPE.filter((m)=> m.type == "equipment")
  // } else if (sortedBy == "Item"){
  //   LIST = LIST_TYPE.filter((m)=>m.type == "item")
  // } else if (sortedBy == "Head"){
  //   LIST = LIST_TYPE.filter((m)=>m.subType == "head")
  // } else if (sortedBy == "Body"){
  //   LIST = LIST_TYPE.filter((m)=>m.subType == "body")
  // } else if (sortedBy == "Weapon"){
  //   LIST = LIST_TYPE.filter((m)=>m.subType == "weapon")
  // } else if (sortedBy == "Consumable"){
  //   LIST = LIST_TYPE.filter((m)=>m.subType == "consumable")
  // }

  const sortBy = ( sortBy: string) =>{
    if (sortedBy === sortBy) sortBy = "none"
    setSortedBy(sortBy)
  }

  return (
    <div className="flex justify-around my-3 font-bold bg-blue-400 px-4 py-2 rounded-md ">
    {filterLables.map((sort: any, i) => (
      <button className="hover:text-white" onClick={()=>sortBy(sort)} key={i}>{sort}</button>
    ))}
  </div>
  )
}

export default FilterList
