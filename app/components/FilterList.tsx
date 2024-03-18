
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

  let LIST = LIST_TYPE

if (sortedBy !== "none"){
    categoryFilterArr.forEach(str => {
      const words = str.split('.')
      const category = words[0]
      const filter = words[1]
    if (sortedBy.toLowerCase() === filter){
        LIST = LIST_TYPE.filter((l) => l[category] == filter)
        console.log('[Cat]', category, '[Filt]er', filter, '[LIST]',LIST)
    }
  });
} else {
  LIST = LIST_TYPE
}

// if(sortedBy == "none"){
//   MOVES = MOVE_TYPES
// } else if (sortedBy == "Attack"){
//   MOVES = MOVE_TYPES.filter((m)=> m.type == "attack")
// } else if (sortedBy == "Support"){
//   MOVES = MOVE_TYPES.filter((m)=>m.type == "support")
// } else if (sortedBy == "Physical"){
//   MOVES = MOVE_TYPES.filter((m)=>m.style == "physical")
// } else if (sortedBy == "Energy"){
//   MOVES = MOVE_TYPES.filter((m)=>m.style == "energy")
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
