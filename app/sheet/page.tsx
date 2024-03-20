'use client'

import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import Modal from '../components/Modal';
import { CHARACTER_TYPES } from "../../shared/constants/index";
import Stats from './Stats';
import Points from './Points';
import Equipment from './Equipment';
import Attributes from './Attributes';


export default function page() {
  const [toggle, setToggle] = useState(false)
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
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-2'>
                  <div className='my-5 text-lg text-center font-bold'>
                        {form.name}
                  </div>
                    <MdEdit onClick={(e) => {setToggle(true)}} className='hover:cursor-pointer'/>
                </div>
              </div>
              {/* NAME */}
              <div className='grid grid-rows-1 grid-flow-col'>
            <div className='pe-6'>

                <Attributes form={form} handleChange={handleChange}/>

              <div className='mt-4'>
                <div>
                    <p className='font-bold'>Moves</p>
                  <div className='bg-white me-10 py-2'>
                    <ul>
                      {form.moves.map((move: any)=> (
                      <li key={move}>{move}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                    <p className='font-bold'>Forms</p>
                  <div className='bg-white me-10 py-2'>
                    <ul>
                      <li>Great Ape</li>
                    </ul>
                  </div>
                </div>
                <div>
                    <p className='font-bold'>Inventory</p>
                  <div className='bg-white me-10 py-2'>
                    <ul>
                      {form.inventory.map((item: any)=>(
                      <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='font-bold' >Description</label>
                  <textarea onChange={handleChange} value={form.description} className='resize-none me-10 px-4' name="description" id="description" cols={30} rows={4} placeholder='Provide a brief description of your character here...'></textarea>
                </div>
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
      {toggle && <Modal name = {form.name} setToggle = {setToggle} />}
    </>
  )
}
