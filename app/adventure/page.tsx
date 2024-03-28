import React from 'react'

export default function page() {
  return (
    <main>
      <h1>Here you can find out about the Adventures that await you in Dungeons & DragonBalls!</h1>
      <div className='bg-white rounded'>
        <h2>Adventure</h2>
        <h3>An adventure is a series of events that will help you and up to 2 friends explore the world of DragonBall. In an adventure you will be faced with tough decisions and powerful enemies! With the sparking power of the Zfighters you can rise to the occasion and become the strongest!</h3>
        <p>An adventure is an automated experience. 
          Think of it like a series of rooms. The simplest of adventures would be a one room that leads to a single room that then leads to a single room.
        </p>
        <h4 className='font-bold mt-3'>Adventures</h4>
        <p>Although this is an expectable way to play it {`wouldn't`} be the most fun.</p>
        <p>A more complex adventure can feature rooms with multiple doors, that lead to rooms with even more doors.</p>
        <h4 className='font-bold mt-3'>Rooms</h4>
        <p>Within a room there will be events such as; battles, investigations, dilemmas and resource opportunities!</p>
        <h4 className='font-bold mt-3'>Doors</h4>
        <p>Doors can be locked or unlocked depending on previous decisions by you and your team of Zfighters during an adventure. Doors lead to other rooms, but may lead to rooms further down the adventure than a different door would, like a hallway.</p>
        <p>Doors are mostly one way, {`'locking'`} behind your group in most cases directing your team to continue onward. An exception may be in the case of an optional door. Like a sub quest.</p>
        <h4 className='font-bold mt-3'>Moving through Doors</h4>
        <p>Typically the decision to move through a door will be left to the group in the form of a vote. Teams are unable to split up. Instances where the team {`isn't`} able to choose may be the result of other decisions made that forced them to move through a door.</p>
      </div>
    </main>
  )
}
