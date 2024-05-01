import { ARCHETYPE_TYPES, ITEM_TYPES, ORIGIN_TYPES } from '@/shared/constants'
import React, { useEffect, useState } from 'react'

interface formProps{
  form: any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Equipment({form, handleChange}:formProps) {
  const [equipmentDisplay, setEquipmentDisplay] = useState([""])

  useEffect(()=> {
  const arch = ARCHETYPE_TYPES.find((a)=>a.displayName === form.archetype)

  const archEquipment = arch ? arch.startingEquipment : []

  const equipmentList = archEquipment.map((e: any) =>{
      const itemById = ITEM_TYPES.find((i)=> i.name === e)
      return itemById?.id
    })
    
      handleChange({
        target: {
          name: 'equipment',
          value: equipmentList
        }
      } as React.ChangeEvent<any>);

    },[form.archetype])

    useEffect(()=> {
      const equipment = form.equipment
      const updatedList = equipment.map((e: any) =>{
          const itemById = ITEM_TYPES.find((i)=> i.id === e)
          return itemById?.displayName
        })
        setEquipmentDisplay(updatedList)
    
        },[form])

  return (
    <div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                <p className='text-center font-bold mb-2'>Equipment</p>
                <div>
                    <p className='text-center font-bold'>Head</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentDisplay[0]}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Body</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentDisplay[1]}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Weapon</p>
                  <div className='bg-white py-2 px-4'>
                    {equipmentDisplay[2]}
                  </div>
                </div>
              </div>
    </div>
  )
}
