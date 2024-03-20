import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import Modal from '../components/Modal';

interface formProps{
  form: any
}

export default function Name({form}:formProps) {

  const [toggle, setToggle] = useState(false)


  return (
    <>
    <div className='flex flex-col items-center'>
    <div className='flex items-center gap-2'>
      <div className='my-5 text-lg text-center font-bold'>
            {form.name}
      </div>
        <MdEdit onClick={(e) => {setToggle(true)}} className='hover:cursor-pointer'/>
    </div>
  </div>
  {toggle && <Modal name = {form.name} setToggle = {setToggle} />}
  </>
  )
}
