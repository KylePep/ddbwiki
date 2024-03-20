import React from 'react'

interface formProps{
  form: any
}

export default function Equipment({form}:formProps) {
  return (
    <div>
                    <div className='mt-3 '>
                <p className='text-center font-bold'>Equipment</p>
                <div>
                    <p className='text-center'>Head</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.head}
                  </div>
                </div>
                <div>
                    <p className='text-center'>Body</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.body}
                  </div>
                </div>
                <div>
                    <p className='text-center'>Weapon</p>
                  <div className='bg-white py-2 px-4'>
                    {form.equipment.weapon}
                  </div>
                </div>
              </div>
    </div>
  )
}
