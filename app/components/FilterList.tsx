
import React, { useState } from 'react'

interface ListItem {
  id: number;
  title: string;
  type: string;
  subType: string;
  description: string;
}

interface filterListProps{
  LIST_TYPE: ListItem[],
  categoryFilterArr: string[],
  setList: (list: ListItem[]) => any,
  list: (ListItem[])
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
        const category = words[0]
        const filter = words[1]
      if (sortBy.toLowerCase() === filter){
          newList = LIST_TYPE.filter((l) => l[category] == filter)
          setList(newList)
          console.log('[Sort]', sortedBy, '[Cat]', category, '[Filter]', filter, '[LIST]',list)
        }
    });
  } else {
    setList(newList)
  }
  }

  return (
    <div>
      <div className="flex justify-around my-3 font-bold bg-blue-400 px-4 py-2 rounded-md ">
      {filterLables.map((sort: any, i) => (
        <button className="hover:text-white" onClick={()=>sortBy(sort)} key={i}>{sort}</button>
      ))}
    </div>
    <div className='flex justify-between'>
    <div>{sortedBy}</div>
        <div>

      {list.map((sort: any, i) => (
        <div className=""key={i}>{sort.title}</div>
      ))}
        </div>
        <div>
      {LIST_TYPE.map((sort: any, i) => (
        <div className="text-red-500"key={i}>{sort.title}</div>
      ))}

        </div>
    </div>
    </div>
    )
}

export default FilterList
