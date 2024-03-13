'use client'

import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import Modal from '../components/Modal';


export default function page() {
  const [toggle, setToggle] = useState(false)
  const [form, setForm] = useState({
    name: "Aspara", 
    level: 1, 
    origin: "saiyan", 
    archetype: "warrior", 
    pronouns:"he | him",
    bodyType: "Masculine", 
    height: "average", 
    description: "", 
    stats:{mod: 3, spirit: 3, ki: 3, power: 3, agility: 3, toughness: 3}, 
    equipment:{head:"Scouter", body: "Saiyan Armor", weapon: "none"}, 
    moves:["Ki Blast"], inventory:["Scouter", "Saiyan Armor"], 
    forms:["Great Ape"]
  })

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
            return prevForm; // Do not update the form
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
        <div className='bg-gray-100  px-8 py-4 rounded'>
          <form onSubmit={submitForm}>

              <p className='mb-5 text-lg font-bold'>
                Dungeons & DragonBalls Character Sheet
              </p>
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-2'>
                  <div className='my-5 text-lg text-center font-bold'>
                        {form.name}
                  </div>
                    <MdEdit onClick={(e) => {setToggle(true)}} className='hover:cursor-pointer'/>
                </div>
              </div>
          <div className='grid grid-rows-1 grid-flow-col'>
            <div className='pe-6'>
            <div className='grid grid-cols-2 grid-flow-row gap-2'>

            <div>
              <div>
                <label htmlFor="name" className='font-bold'>Name </label>
                  <div>
                    <input onChange={handleChange} value={form.name}  className='ps-2' type="text" name="name" id="name" minLength={1} maxLength={20}/>
                </div>
              </div>
            </div>

            <div>
                <label htmlFor="name" className='font-bold'>Origin </label>
                  <div>
                    <select onChange={handleChange} value={form.origin} name="origin" id="origin">
                      <option value="saiyan">Saiyan</option>
                      <option value="halfSaiyan">Half Saiyan</option>
                      <option value="earthling">Earthling</option>
                      <option value="namekian">Namekian</option>
                    </select>
                </div>
              </div>

            <div>
              <div>
                <label htmlFor="level" className='font-bold'>Level </label>
                  <div>
                    <input onChange={handleChange} value={form.level} className='ps-2' type="number" name="level" id="level" min={1} max={5} placeholder='1'/>
                </div>
              </div>
            </div>

            <div>
                <label htmlFor="name" className='font-bold'>Archetype </label>
                  <div>
                    <select onChange={handleChange} value={form.archetype} name="archetype" id="archetype">
                      <option value="warrior">Warrior</option>
                      <option value="support">Support</option>
                      <option value="striker">Striker</option>
                      <option value="tank">Tank</option>
                    </select>
                </div>
              </div>

              <div>
                <label htmlFor="pronouns" className='font-bold'>Pronouns </label>
                  <div>
                    <select onChange={handleChange} value={form.pronouns} className='ps-1' name="pronouns" id="pronouns">
                      <option value="masculine">he | him</option>
                      <option value="feminine">she | her</option>
                      <option value="neither">they | them</option>
                    </select>
                </div>
              </div>

            <div className='flex'>
                  <div>
                <label htmlFor="bodyType" className='font-bold'>Body Type </label>
                    <select onChange={handleChange} value={form.bodyType} name="bodyType" id="bodyType">
                      <option value="masculine">Masculine</option>
                      <option value="feminine">Feminine</option>
                      <option value="neither">Neither</option>
                    </select>
                </div>
                  <div>
                <label htmlFor="height" className='font-bold'>Height </label>
                    <select onChange={handleChange} value={form.height} name="height" id="height">
                      <option value="average">Average</option>
                      <option value="short">Short</option>
                      <option value="veryShort">Very Short</option>
                      <option value="tall">Tall</option>
                      <option value="veryTall">Very Tall</option>
                    </select>
                </div>
              </div>
            </div>

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
              <p  className='text-center font-bold'>
              Stats
              </p>
              <p className='text-center'>
                - {form.stats.mod} -
              </p>
              
              <div className='grid grid-rows-3 grid-flow-col gap-2'>                
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="spirit">Spirit </label>
                  <input onChange={handleChange} value={form.stats.spirit} className='ps-2' type="number" name="stats.spirit" id="spirit" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="power">Power </label>
                  <input onChange={handleChange} value={form.stats.power} type="number" name="stats.power" id="power" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="toughness">Toughness </label>
                  <input onChange={handleChange} value={form.stats.toughness} type="number" name="stats.toughness" id="toughness" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="ki">Ki </label>
                  <input onChange={handleChange} value={form.stats.ki} type="number" name="stats.ki" id="ki" min={1} max={5}/>
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="agility">Agility </label>
                  <input onChange={handleChange} value={form.stats.agility} type="number" name="stats.agility" id="agility" min={1} max={5}/>
                </div>
              </div>
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
          </div>
          <button type='submit' className='bg-blue-400 hover:bg-blue-200 rounded-md my-4 px-4 py-2'>Create Character</button>

        </form>
        </div>
      </div>
      {toggle && <Modal name = {form.name} setToggle = {setToggle} />}
    </>
  )
}
