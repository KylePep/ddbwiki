import { FORM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import Modal from '../components/Modal'
interface formProps{
  form: any
  handleChange: any
}

export default function Forms({form, handleChange}:formProps) {
  const [toggle, setToggle] = useState(false)
  const [content, setContent] = useState('')

  const origin = ORIGIN_TYPES.find((o)=> o.title === form.origin)

  const originForms = origin ? origin.forms : []
  console.log(originForms)

  const formsList = originForms.map((fl)=> {
      const formById = FORM_TYPES.find((f)=> f.id == fl)
      return formById
  })

  return (
    <div className='bg-gray-300 p-2 rounded-md mb-3'>
    <p className='font-bold'>Forms</p>
  <div className='bg-white me-10 py-2 w-full'>
    <ul>
      {formsList.length ? (
        formsList.map((form: any)=>(
          <li className='group hover:cursor-pointer hover:text-gray-800'  key={form.id}>{form.title}
            <span className='invisible group-hover:visible text-black ms-2'><button onClick={(e)=> {setToggle(true), setContent( form)}} className='bg-blue-200 hover:bg-blue-300 px-1 rounded'>Info</button></span>
          </li>
        ))

      ):(
        <li>-No Forms-</li>
      )}
    </ul>
  </div>
  {toggle && <Modal type="describe"  content = {content} setToggle = {setToggle} />}
</div>
  )
}
