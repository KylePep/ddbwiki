import React from 'react'

interface formProps{
  form: any
}

export default function Points({form}:formProps) {
  return (
    <div className='mb-3'>
                    <div className='bg-gray-300 p-2 rounded-md mb-2'>
                    <p className='text-center font-bold'>Health</p>
                  <div className='bg-white text-center p-2'>
                        5 / 5
                  </div>
                </div>

              <div className='bg-gray-300 p-2 rounded-md mb-2'>
                    <p className='text-center font-bold'>Sparking</p>
                  <div className='bg-white text-center p-2'>
                        0 / 5
                  </div>
                </div>

              <div className='bg-gray-300 p-2 rounded-md'>
                    <p className='text-center font-bold'>{form.archetype} counter</p>
                  <div className='bg-white text-center p-2'>
                        3 / 3
                  </div>
                </div>
    </div>
  )
}
