import React from 'react'

export default function page() {
  return (
    <main>
      <h1 className='mb-3 text-lg'>The world of Dungeons & DragonBalls. Here you can learn about locations such as planets and points of interest.</h1>
      <div className='mb-4'>
        <h2 className='font-bold mb-2'>The Tree of Might</h2>
        <ul>
          <li>Forest</li>
          <li>Camp Site</li>
          <li>Ruined Forest</li>
          <li>{`Goku's House`}</li>
          <li>Foot of the Tree of Might</li>
          <li>Crown of the Tree of Might</li>
        </ul>
      </div>

      <div className='flex justify-around'>
        <div>
          <h2 className='font-bold text-md'>Locations</h2>
          <ul className='mb-3'>
            <li>Planet Earth</li>
            <li>Planet Namek</li>
            <li>Planet New Namek</li>
            <li>Other World</li>
            <li>Planet Vegeta</li>
            <li>Planet New Vegeta</li>
            <li>King {`Kai's`} Planet</li>
            <li>Planet New Vegeta</li>
            <li>Big Gete Star</li>
            <li>{`Beerus'`} Planet</li>
            <li>Cereal</li>
            <li>Demon Realm</li>
            <li>Grand {`Kai's`} Planet</li>
            <li>Hera</li>
            <li>Konats</li>
            <li>Makyo Star</li>
            <li>Metamor</li>
            <li>Planet Cruiser</li>
            <li>Sadala</li>
            <li>Vampa</li>
            <li>Yardrat</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-md'>Points of Interest</h2>
          <ul>
            <li>Cell Games Arena</li>
            <li>Kame House</li>
            <li>Check-In Station</li>
            <li>Snake Way</li>
              <ul>
                <li>Princess {`Snake's`} palace</li>
              </ul>
            <li>Mount Paozu</li>
              <ul>
                <li>Diablo Desert</li>
                  <ul>
                    <li>{`Yamcha's`} Hideout</li>
                    <li>{`Pilaf's`} Castle</li>
                  </ul>
                </ul>
              <ul>
                <li>East District</li>
                <ul>
                  <li>Grandpa {`Gohan's`} House</li>
                  <li>{`Goku's`} House</li>
                </ul>
              </ul>
            <li>Sacred Land of Korin</li>
              <ul>
                <li>Hermit Spring</li>
                <li>Korin Tower</li>
                <li>The Lookout</li>
                  <ul>
                    <li>Hyperbolic Time Chamber</li>
                    <li>Pendulum Room</li>
                  </ul>
              </ul>
            <li>Satan City</li>
              <ul>
                <li>Satan House</li>
                <li>Orange Star High School</li>
                <li>Satan City Primary School</li>
              </ul>
            <li>West City</li>
              <ul>
                <li>Capsule Corporation</li>
              </ul>
          </ul>
        </div>
        
      </div>
    </main>
  )
}
