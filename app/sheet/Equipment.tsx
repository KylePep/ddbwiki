import { ITEM_TYPES } from '@/shared/constants'
import React from 'react'

interface formProps{
  form: any
}

export default function Equipment({form}:formProps) {
  const equipment = form.equipment
  const equipmentList =equipment.map((e: any) =>{
    const itemById = ITEM_TYPES.find((i)=> i.id === e)
    return itemById
  })
  return (
    <div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                <p className='text-center font-bold mb-2'>Equipment</p>
                <div>
                    <p className='text-center font-bold'>Head</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[0].title}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Body</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[1].title}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Weapon</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[2].title}
                  </div>
                </div>
              </div>
    </div>
  )
}
