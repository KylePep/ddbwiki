'use client'

import React, { useState } from 'react'
import Modal from '../components/Modal';
import { CHARACTER_TYPES } from "../../shared/constants/index";
import Stats from './Stats';
import Points from './Points';
import Equipment from './Equipment';
import Attributes from './Attributes';
import Moves from './Moves';
import Forms from './Forms';
import Items from './Items';
import Description from './Description';
import Name from './Name';


export default function page() {
  const [form, setForm] = useState(CHARACTER_TYPES)

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const nestedField = name.split(".");
  
    if (nestedField.length === 1) {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    } else {
      const category = name.split(".")[0];
      const field = name.split(".")[1];
  
      if (category !== 'stats') {
        setForm(prevForm => ({
          ...prevForm,
          [category]: {
            ...prevForm[category],
            [field]: value
          }
        }));
      } else {
        setForm(prevForm => {
          let modStat = prevForm.stats[field] < value ? -1 : prevForm.stats[field] > value ? +1 : 0;
          
          if (modStat === -1 && prevForm.stats.mod === 0) {
            return prevForm; 
          }
  
          return {
            ...prevForm,
            [category]: {
              ...prevForm[category],
              [field]: value,
              mod: prevForm.stats.mod + modStat
            }
          };
        });
      }
    }
  };

  const submitForm = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
    
    <div>
    </div>

      <div>
        <div className='bg-gray-100  px-8 py-4 rounded'>
          <form onSubmit={submitForm}>

              <p className='mb-5 text-lg font-bold'>
                Dungeons & DragonBalls Character Sheet
              </p>
              {/* NAME */}
                <Name form={form}/>
              {/* NAME */}
              <div className='grid grid-rows-1 grid-flow-col'>
            <div className='pe-6'>

                <Attributes form={form} handleChange={handleChange}/>

              <div className='mt-4'>

                  <Moves form={form} /> 

                  <Forms form={form} />

                  <Items form={form}/>

                <Description form={form} handleChange={handleChange}/>

              </div>
            </div>


            <div className='flex flex-col border-solid border-s-2 border-black-500 ps-6'>
                <Stats form={form} handleStatsChange={handleChange}/>

                <Points form={form}/>

                <Equipment form={form}/>

            </div>
          </div>

          <button type='submit' className='bg-blue-400 hover:bg-blue-200 rounded-md my-4 px-4 py-2'>Create Character</button>

        </form>
        </div>
      </div>

    </>
  )
}
