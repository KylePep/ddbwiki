import React from 'react'

interface formProps{
  form: any
}

export default function Equipment({form}:formProps) {
  return (
    <div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                <p className='text-center font-bold mb-2'>Equipment</p>
                <div>
                    <p className='text-center font-bold'>Head</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.head}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Body</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.body}
                  </div>
                </div>
                <div>
                    <p className='text-center font-bold'>Weapon</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.weapon}
                  </div>
                </div>
              </div>
    </div>
  )
}
