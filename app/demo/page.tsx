'use client'
import { DEMO_DATA, ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import PlayerMenu from './PlayerMenu'
import Display from './Display'
import Tutorial from './Tutorial'
import BossDisplay from './BossDisplay'
import { ActivePlayer } from '../Types/ActivePlayer'
import { ActiveEnemy } from '../Types/ActiveEnemy'
import { Player } from '../Types/Player'
import { AdventurePlayerData,  } from '../Types/AdventurePlayerData'
import { AdventureInstance } from '../Types/AdventureInstance'
import { Enemy } from '../Types/Enemy'

const data = DEMO_DATA

export function createActiveEnemy(): ActiveEnemy {
  
  const enemy= (): Enemy => {
    let foundEnemy:Enemy | undefined =  ENEMY_TYPES.find((b)=>b.name === data.adventureInstance.enemyData[0].name)
    if (!foundEnemy){ foundEnemy = ENEMY_TYPES[0] }
    return foundEnemy
  }

  const adventureEnemy = data.adventureInstance.enemyData[0]

  const activeEnemy: ActiveEnemy = {
    ...adventureEnemy,
    ...enemy(),
  };
  console.log('activeEnemy', activeEnemy)
  return activeEnemy
}

  export function createActivePlayer(): ActivePlayer {
    const adventurePlayer = data.adventurePlayer
    const player = data.player

    const activePlayer: ActivePlayer = {
      ...adventurePlayer,
      ...player,
    };
    console.log('activePlayer', activePlayer)
    return activePlayer
  }



export default function page() {
  const [room, setRoom] = useState(data.rooms.find((r) => r.id == data.adventureInstance.roomCurrent))
  const [dial, setDial] = useState(data.dialogue.find((d)=> d.id == room?.dialogue))
  const [dialProgress, setDialProgress] = useState(data.adventureInstance.doorProgress)
  const [currentPrompt, setCurrentPrompt] = useState(dial?.promptData .find((cd)=> cd.id == dialProgress))
  const [currentResponse, setCurrentResponse] = useState(dial?.responsesData[0])

  const Boss = createActiveEnemy()
  const Player = createActivePlayer()





  const updateRoom = (roomId: string | undefined, dialId:string | undefined, dialProgressId: string)=> {
    if (roomId == undefined || dialId == undefined || dialProgressId == undefined) {
      return
    } else {

      if (dialProgressId == "exit"){
        data.adventureInstance.roomsProgress = "battle"
      }

      if (roomId === room?.id) {}
      else {
        const newRoom = data.rooms.find((r)=> r.id == roomId)
        const newDial = data.dialogue.find((d)=> d.id == newRoom?.dialogue)
        setRoom(newRoom)
        setDial(newDial)
        if (newRoom)
        setDialProgress(newRoom?.dialogue)
        setCurrentPrompt(newDial?.promptData[0])
        setCurrentResponse(newDial?.responsesData[0])
        return
      } 

      if (dialId === dial?.id) {}
      else {
        const newDial = data.dialogue.find((d)=> d.id == dialId)
        setDial(newDial)
        setDialProgress("0D")
        setCurrentPrompt(newDial?.promptData[0])
        setCurrentResponse(newDial?.responsesData[0])
        return
      } 

      if (dialProgressId === dialProgress) {}
      else {
        const newChapter = dial.promptData.find((cd)=> cd.id == dialProgressId)
        const newResponse = dial.responsesData.find(((rd)=> rd.id == newChapter?.responseId))
        setDialProgress(dialProgressId)
        setCurrentPrompt(newChapter)
        setCurrentResponse(newResponse)
      } 
    }
  }

  return (
    <div>

      <div className='flex bg-white rounded p-2'>

        <div className=' w-3/5 bg-gray-500 border border-solid border-black rounded p-2'>

            <BossDisplay Boss={Boss} data={data}/>

              <Display data={data} room={room} dialProgress={dialProgress} currentChapter={currentPrompt} Boss={Boss} Player={Player}/>

          <div className=' text-center bg-gray-300 border border-solid border-black '>

            <PlayerMenu Player={Player} data={data} updateRoom={updateRoom} currentResponse={currentResponse} dial={dial} room={room}/>
            
          </div>
        </div>

        <div className='w-2/5 p-2'>

          <Tutorial/>
        </div>
      </div>

    </div>
  )
}
