
import React, { useState } from 'react'

// interface ListItem {
//   id: number;
//   title: string;
//   type: string;
//   subType?: string;
//   style?: string;
//   description: string;
// }

interface filterListProps{
  LIST_TYPE: any[],
  categoryFilterArr: string[],
  setList: (list: any[]) => any,
  list: any[]
}

function FilterList({LIST_TYPE, categoryFilterArr, setList, list} : filterListProps) {
  const [sortedBy, setSortedBy] = useState("none")
  
  const filterLables = categoryFilterArr.map(str=> {
    const words = str.split('.')
    const word = words[1].charAt(0).toUpperCase() + words[1].slice(1)
    return word
  })  
  
  const sortBy = ( sortBy: string) =>{

    if (sortBy === sortedBy) {
      sortBy = "none"
    }
    setSortedBy(sortBy)
    
    let newList = LIST_TYPE

    if (sortBy !== "none"){
      categoryFilterArr.forEach(str => {
        const words = str.split('.')
        const category = words[0] as keyof object;
        const filter = words[1]
      if (sortBy.toLowerCase() === filter){
          newList = LIST_TYPE.filter((l) => l[category] == filter)
          setList(newList)
        }
    });
  } else {
    setList(newList)
  }
  }

  return (
    <div>
      <div className="flex justify-around my-3 font-bold bg-blue-400 px-4 py-2 rounded-md ">
      {filterLables.map((sort: string, i) => (
        <button 
        className={`hover:text-white ${sortedBy === sort ? 'capitalize' : ''}`}
        onClick={()=>sortBy(sort)} 
        key={i}
        >
          {sortedBy != `${sort}` ? `${sort}` : `${sort.toUpperCase()}`}
          </button>
      ))}
      </div>
    </div>
    )
}

export default FilterList
