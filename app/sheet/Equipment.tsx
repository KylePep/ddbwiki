import { ITEM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useEffect, useState } from 'react'

interface formProps{
  form: any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Equipment({form, handleChange}:formProps) {
  const [equipmentList, setEquipmentList] = useState(form.equipment)

  useEffect(()=> {
  const origin = ORIGIN_TYPES.find((o)=>o.title === form.origin)

  const originEquipment = origin ? origin.startingEquipment : []

  const equipmentList = originEquipment.map((e: any) =>{
      const itemById = ITEM_TYPES.find((i)=> i.id === e)
      return itemById?.id
    })
    
    // if (JSON.stringify(form.equipment) !== JSON.stringify(equipmentList)) {
      handleChange({
        target: {
          name: 'equipment',
          value: equipmentList
        }
      } as React.ChangeEvent<any>);
    // }

    },[form.origin])

    useEffect(()=> {
      const equipment = form.equipment
    
      const equipmentList = equipment.map((e: any) =>{
          const itemById = ITEM_TYPES.find((i)=> i.id === e)
          return itemById
        })
        setEquipmentList(equipmentList)
    
        },[form.equipment])

  return (
    <div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                <p className='text-center font-bold mb-2'>Equipment</p>
                <div>
                    <p className='text-center font-bold'>Head</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[0]?.title}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Body</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[1]?.title}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Weapon</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentList[2]?.title}
                  </div>
                </div>
              </div>
    </div>
  )
}
