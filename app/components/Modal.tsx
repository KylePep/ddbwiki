'use client'

import { FaRegWindowClose } from "react-icons/fa";

type ToggleProps = {
  type: string,
  content: any,
  setToggle: (toggle: boolean) => void
}

export default function Modal({ type, content, setToggle}: ToggleProps){
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget){
      setToggle(false)
    }
  }
  return(
    <div onClick={handleClick} className="fixed bg-black/15 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg">
        <div className="flex flex-col items-end">
      <FaRegWindowClose onClick={(e)=>{setToggle(false)}} className="hover:cursor-pointer text-red-500 mb-3"/>
        </div>
        { type === "name" &&
          <div className="grid grid-flow-col grid-row-2 gap-6 p-6">

          <div>
              <h2 className="">
                Name Character Editor
              </h2>
              <div className="text-xl text-center">
                {content}
              </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-200 hover:bg-blue-300 rounded">This</button>
            <button className="bg-blue-200 hover:bg-blue-300 rounded">That</button>
            <button className="bg-blue-200 hover:bg-blue-300 rounded"> The other</button>
          </div>
          </div>
        }
        {
          type === "describe" &&
          <div className="flex flex-col gap-2 p-6">
            <h1 className="font-bold">
              Title: {content.displayName}
            </h1>
            <h2>Type: {content.type}</h2>
            <h3>Sub Type: {content.subType}</h3>
            <div>
              Description: {content.description}
            </div>
          </div>
        }
      </div>
    </div>
  )
}