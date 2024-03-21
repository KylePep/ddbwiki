import { FORM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React from 'react'
interface formProps{
  form: any
}

export default function Forms({form}:formProps) {

  const origin = ORIGIN_TYPES.find((o)=> o.title === form.origin)

  const originForms = origin ? origin.forms : []
  console.log(originForms)

  const formsList = originForms.map((fl)=> {
      const formById = FORM_TYPES.find((f)=> f.id == fl)
      return formById
  })

  return (
    <div>
    <p className='font-bold'>Forms</p>
  <div className='bg-white me-10 py-2'>
    <ul>
      {formsList.length ? (
        formsList.map((form: any)=>(
          <li className=''  key={form.id}>{form.title}</li>
        ))

      ):(
        <li>-No Forms-</li>
      )}
    </ul>
  </div>
</div>
  )
}
