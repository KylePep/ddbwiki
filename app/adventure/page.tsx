import React from 'react'

export default function page() {
  return (
    <main>
      <h1 className='mb-3'>Here you can find out about the Adventures that await you in Dungeons & DragonBalls!</h1>
      <div className='bg-white rounded my-2 p-3'>
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
      <div className='bg-white my-2 rounded p-3'>
        <p>Example of Adventure data</p>
        <div className='font-bold'>{`['aId','bId','cId','dId','eId']`}</div>
        <p>The adventure is recorded as an array of roomIds that can be grabbed individually from the database as the players proceed.</p>
        <div className='font-bold my-4'>Room: 
        <p>{`{`}</p>
          <ul>
            <li>Id: a,</li>
            <li>doors: [b,c], </li>
            <li>dialogue: dialogueId, </li>
            <li>{`eventType: 'event',`}</li>
            <li>{`setting: 'setting',`}</li>
            <li>{`NPC: ['npcId', 'npcId', 'npcId']`} </li>
          </ul>
          <p>{`}`}</p>
        </div>

        <p className='font-bold mb-2'>Dialogue:</p>
        <p className='font-bold'>{`{`}</p>
        <ul>
          <div className='font-bold'>{` id: dialogueId,`}</div>
          <p className='font-bold mt-2'>chapterData:</p>
          <div className='font-bold mb-2'>{`[ { id: 1, content: 'First talky', responseId: 1, doors: [2,3] },`}</div>
          <div className='font-bold my-2'>{`{ id: 2, content: 'Talk then talk', responseId: 2, doors: [3] },`}</div>
          <div className='font-bold my-2'>{`{ id: 3, content: 'Last of Talking', responseId: 3, door: [0] } ],`}</div>
          <p className='font-bold mt-2'>responsesData: </p>
          <div className='font-bold mb-2'>{`[['Yes|2', 'No|3','Remain Silent|2'],`}</div>
          <div className='font-bold mb-2'>{`['I don't wanna|3', 'Make me|3'], `}</div>
          <div className='font-bold mb-2'>{`['Well fine then|0']]`}</div>
        </ul>
        <p className='font-bold'>{`}`}</p>
        <p className='mt-4'>This example data shows how an rooms would relate to an adventure and dialogue would relate to a room.<br/>The event type would decide what kind of room it is, a battle room or one for decision making. <br /> The setting is a string for player reference. <br /> The list of NPCs is also primarily for player reference, to quickly be reminded who is involved in the given room. </p>
      </div>
    </main>
  )
}
