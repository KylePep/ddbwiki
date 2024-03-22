import React from 'react'

interface formProps{
  form: any
}

export default function Points({form}:formProps) {
  return (
    <div className='mb-3'>
                    <div>
                    <p className='text-center font-bold'>Health</p>
                  <div className='bg-white text-center py-2 px-4'>
                        5 / 5
                  </div>
                </div>
              <div>
                    <p className='text-center font-bold'>Sparking</p>
                  <div className='bg-white text-center py-2 px-4'>
                        0 / 5
                  </div>
                </div>
              <div>
                    <p className='text-center font-bold'>{form.archetype} counter</p>
                  <div className='bg-white text-center py-2 px-4'>
                        3 / 3
                  </div>
                </div>
    </div>
  )
}
