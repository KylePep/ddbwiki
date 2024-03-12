'use client'

import { FaRegWindowClose } from "react-icons/fa";

type ToggleProps = {
  name: string,
  setToggle: (toggle: boolean) => void
}

export default function Modal({ name, setToggle}: ToggleProps){
  return(
    <div  className="fixed bg-black/15 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg">
        <div className="flex flex-col items-end">
      <FaRegWindowClose onClick={(e)=>{
        setToggle(false)
      }} className="hover:cursor-pointer text-red-500 mb-3"/>
        </div>
        <div className="grid grid-flow-col grid-row-2 gap-6 p-6">

    <div>
        <h2 className="">
          Name Character Editor
        </h2>
        <div className="text-xl text-center">
          {name}
        </div>
    </div>
    <div className="flex flex-col gap-2">
      <button className="bg-blue-200 hover:bg-blue-300 rounded">This</button>
      <button className="bg-blue-200 hover:bg-blue-300 rounded">That</button>
      <button className="bg-blue-200 hover:bg-blue-300 rounded"> The other</button>
    </div>
        </div>
      </div>
    </div>
  )
}