import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        Build a character
        <div className='bg-gray-100 min-h-96 px-4 py-2 rounded'>
          <p>
            Character Sheet
          </p>

          <form >
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

          </form>

        </div>
      </div>
    </div>
  )
}
