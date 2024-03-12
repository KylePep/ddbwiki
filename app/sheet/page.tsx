import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        <div className='bg-gray-100  px-8 py-4 rounded'>

              <p className='mb-5 text-lg font-bold'>
                Dungeons & DragonBalls Character sheet
              </p>
          <form className='grid grid-rows-1 grid-flow-col'>
            <div>
            <div className='flex gap-2'>

            <div>
              <div>
                <label htmlFor="name" className='font-bold'>Name </label>
                  <div>
                    <input className='ps-2' type="text" name="name" id="name" minLength={1} maxLength={20}  placeholder='Kakarot'/>
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
            </div>
              <div>
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
                  <textarea className='resize-none me-10' name="description" id="description" cols={30} rows={4}></textarea>
                </div>
              </div>
            </div>


            <div className='flex flex-col border-solid border-s-2 border-black-500 '>
              <p  className='text-center font-bold'>
              Stats
              </p>
              
              <div className='grid grid-rows-3 grid-flow-col gap-2'>                
                <div className='flex flex-col w-10 m-auto'>
                  <label htmlFor="name">Spirit </label>
                  <input type="number" name="spirit" id="spirit" min={1} max={5}  />
                </div>
                <div className='flex flex-col w-10 m-auto'>
                  <label htmlFor="name">Power </label>
                  <input type="number" name="power" id="power" min={1} max={5} />
                </div>
                <div className='flex flex-col w-10 m-auto'>
                  <label htmlFor="name">Toughness </label>
                  <input type="number" name="toughness" id="toughness" min={1} max={5} />
                </div>
                <div className='flex flex-col w-10 m-auto'>
                  <label htmlFor="name">Ki </label>
                  <input type="number" name="ki" id="ki" min={1} max={5} />
                </div>
                <div className='flex flex-col w-10 m-auto'>
                  <label htmlFor="name">Agility </label>
                  <input type="number" name="agility" id="agility" min={1} max={5} />
                </div>
              </div>
              <div>
                <p className='text-center font-bold'>Equipment</p>
                <div>
                    <p className='text-center'>Head</p>
                  <div className='bg-white me-10 py-2'>
                    <ul>
                      <li>Saiyan Scouter</li>
                    </ul>
                  </div>
                </div>
                <div>
                    <p className='text-center'>Body</p>
                  <div className='bg-white me-10 py-2'>
                    <ul>
                      <li>Saiyan Armor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}
