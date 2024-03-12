'use client'

import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import Modal from '../components/Modal';


export default function page() {
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('Name')

  return (
    <>
      <div>
        <div className='bg-gray-100  px-8 py-4 rounded'>
          <form action="">

              <p className='mb-5 text-lg font-bold'>
                Dungeons & DragonBalls Character sheet
              </p>
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-2'>
                  <div className='my-5 text-lg text-center font-bold'>
                        {name}
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
                    <input onChange={(e) => setName(e.target.value)} className='ps-2' type="text" name="name" id="name" minLength={1} maxLength={20}/>
                </div>
              </div>
            </div>

            <div>
                <label htmlFor="name" className='font-bold'>Origin </label>
                  <div>
                    <select name="origin" id="origin">
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
                    <input className='ps-2' type="number" name="level" id="level" min={1} max={5} placeholder='1'/>
                </div>
              </div>
            </div>

            <div>
                <label htmlFor="name" className='font-bold'>Archetype </label>
                  <div>
                    <select name="archetype" id="archetype">
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
                    <select className='ps-1' name="pronouns" id="pronouns">
                      <option value="masculine">he | him</option>
                      <option value="feminine">she | her</option>
                      <option value="neither">they | them</option>
                    </select>
                </div>
              </div>

            <div className='flex'>
                  <div>
                <label htmlFor="bodyType" className='font-bold'>Body Type </label>
                    <select name="bodyType" id="bodyType">
                      <option value="masculine">Masculine</option>
                      <option value="feminine">Feminine</option>
                      <option value="neither">Neither</option>
                    </select>
                </div>
                  <div>
                <label htmlFor="height" className='font-bold'>Height </label>
                    <select name="height" id="height">
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
                      <li>Ki Blast</li>
                      <li>Kamehameha</li>
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
                      <li>Scouter</li>
                      <li>Power Pole</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='font-bold' >Description</label>
                  <textarea className='resize-none me-10 px-4' name="description" id="description" cols={30} rows={4} placeholder='Provide a brief description of your character here...'></textarea>
                </div>
              </div>
            </div>


            <div className='flex flex-col border-solid border-s-2 border-black-500 ps-6'>
              <p  className='text-center font-bold'>
              Stats
              </p>
              <p className='text-center'>
                - +2 -
              </p>
              
              <div className='grid grid-rows-3 grid-flow-col gap-2'>                
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="name">Spirit </label>
                  <input type="number" name="spirit" id="spirit" min={1} max={5} placeholder='3' />
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="name">Power </label>
                  <input type="number" name="power" id="power" min={1} max={5} placeholder='3' />
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="name">Toughness </label>
                  <input type="number" name="toughness" id="toughness" min={1} max={5} placeholder='3' />
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="name">Ki </label>
                  <input type="number" name="ki" id="ki" min={1} max={5} placeholder='3' />
                </div>
                <div className='flex flex-col '>
                  <label className='text-center' htmlFor="name">Agility </label>
                  <input type="number" name="agility" id="agility" min={1} max={5} placeholder='3' />
                </div>
              </div>
              <div className='mt-3 '>
                <p className='text-center font-bold'>Equipment</p>
                <div>
                    <p className='text-center'>Head</p>
                  <div className='bg-white py-2 pe-2'>
                    <ul>
                      <li>Saiyan Scouter</li>
                    </ul>
                  </div>
                </div>
                <div>
                    <p className='text-center'>Body</p>
                  <div className='bg-white py-2'>
                    <ul>
                      <li>Saiyan Armor</li>
                    </ul>
                  </div>
                </div>
                <div>
                    <p className='text-center'>Weapon</p>
                  <div className='bg-white py-2'>
                    <ul>
                      <li>-None-</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='bg-blue-400 hover:bg-blue-200 rounded-md my-4 px-4 py-2'>Create Character</button>

        </form>
        </div>
      </div>
      {toggle && <Modal name = {name} setToggle = {setToggle} />}
    </>
  )
}
