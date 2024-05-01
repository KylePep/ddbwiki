'use client'
import { DEMO_DATA, ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import PlayerMenu from './PlayerMenu/PlayerMenu'
import Display from './Display'
import Tutorial from './Tutorial'
import BossDisplay from './BossDisplay'
import { ActivePlayer } from '../Types/ActivePlayer'
import { ActiveEnemy } from '../Types/ActiveEnemy'
import { Enemy } from '../Types/Enemy'
import { Dialogue, Prompt, Response } from '../Types/Dialogue'
import { Room } from '../Types/Room'
import { updateRoomByAdventureStatus } from './helpers'

const data = DEMO_DATA
const turnData = data.turnData

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
  return activeEnemy
}

  export function createActivePlayer(): ActivePlayer {
    const adventurePlayer = data.adventurePlayer
    const player = data.player

    const activePlayer: ActivePlayer = {
      ...adventurePlayer,
      ...player,
    };
    return activePlayer
  }

  export const getInitialData = () => {
    interface InitialData {
      room: Room;
      prompt: Prompt;
      response: Response;
      dial: Dialogue;
    }
  
    const initData: InitialData = {
      room: {} as Room,
      dial: {} as Dialogue,
      prompt: {} as Prompt,
      response: {} as Response
  };
  
  
    initData.room = data.rooms.find((r) => r.id == data.adventureInstance.roomId) ?? data.rooms[0]
    initData.dial = data.dialogue.find((d) => d.id == initData.room.dialogue) ?? data.dialogue[0]
    initData.prompt = initData.dial.promptData[0] ?? data.dialogue[0].promptData
    initData.response = initData.dial.responseData[0] ?? data.dialogue[0].responseData;
  
    return initData
  }

export default function page() {


  const roomData = getInitialData()

  const [room, setRoom] = useState<Room>(roomData.room)
  const [dial, setDial] = useState<Dialogue>(roomData.dial)
  const [roomState, setRoomState] = useState<string>(data.adventureInstance.roomState)
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>(roomData.prompt)
  const [currentResponse, setCurrentResponse] = useState<Response>(roomData.response)

  const updateRoom = (newAdventureInstance: any) => {
    const updatedRoom = updateRoomByAdventureStatus(data, data.adventureInstance, newAdventureInstance) 
    console.log(updatedRoom)
    if (updatedRoom) {
      if (updatedRoom.newRoom.id)
      setRoom(updatedRoom.newRoom)
      if (updatedRoom.newRoomState != "")
      setRoomState(updatedRoom.newRoomState)
      if (updatedRoom.newDial.id)
      setDial(updatedRoom?.newDial)
      if (updatedRoom.newPrompt.id)
      setCurrentPrompt(updatedRoom?.newPrompt)
      if (updatedRoom.newResponse.id)
      setCurrentResponse(updatedRoom.newResponse)
    }
  }

  const Boss = createActiveEnemy()
  const Player = createActivePlayer()

  return (
    <div>

      <div className='flex bg-white rounded p-2'>

        <div className=' w-3/5 bg-gray-500 border border-solid border-black rounded p-2'>

            <BossDisplay Boss={Boss} data={data}/>

              <Display data={data} room={room} roomState={roomState} currentPrompt={currentPrompt} Boss={Boss} Player={Player}/>

          <div className=' text-center bg-gray-300 border border-solid border-black '>

            <PlayerMenu Player={Player} data={data} updateRoom={updateRoom} currentResponse={currentResponse} room={room}/>
            
          </div>
        </div>

        <div className='w-2/5 p-2'>

          <Tutorial/>
        </div>
      </div>

    </div>
  )
}
