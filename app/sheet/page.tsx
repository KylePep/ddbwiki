import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        Build a character
        <div className='bg-gray-100 min-h-96 px-4 py-2 rounded'>


          <form className='grid grid-rows-1 grid-flow-col'>
            
            <div>
              <p>
                Character Sheet
              </p>
              <div>
                <label htmlFor="name">Name </label>
                  <div>
                    <input type="text" name="name" id="name"  />
                </div>
              </div>

              <div>
                <label htmlFor="name">Origin </label>
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
                <label htmlFor="name">Archetype </label>
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

            <div className='flex flex-col gap-2'>
              -STATS-
              <div className='grid grid-rows-3 grid-flow-col gap-2'>                
                <div className='flex flex-col'>
                  <label htmlFor="name">Spirit </label>
                  <input type="number" name="spirit" id="spirit" min={1} max={5}  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="name">Power </label>
                  <input type="number" name="power" id="power" value={3} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="name">Toughness </label>
                  <input type="number" name="toughness" id="toughness" value={3} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="name">Ki </label>
                  <input type="number" name="ki" id="ki" value={3} />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="name">Agility </label>
                  <input type="number" name="agility" id="agility" value={3} />
                </div>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}
