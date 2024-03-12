'use client'

type ToggleProps = {
  // deletePost: ()=> void
  setToggle: (toggle: boolean) => void
}

export default function Modal({ setToggle}: ToggleProps){
  return(
    <div onClick={(e)=>{
      setToggle(false)
    }} className="fixed bg-black/15 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">
          Name Character Editor
        </h2>
      </div>
    </div>
  )
}