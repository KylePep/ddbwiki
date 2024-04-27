'use client'
import { DEMO_DATA, ENEMY_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import PlayerMenu from './PlayerMenu'
import Display from './Display'
import Tutorial from './Tutorial'
import BossDisplay from './BossDisplay'

const data = DEMO_DATA

const boss = () => {
  const base = ENEMY_TYPES.find((b)=>b.name === data.adventureInstance.enemyData[0].name)

  const combinedObject = {
    ...data.adventureInstance.enemyData[0],
    base: base
  }

  return combinedObject
  }

  const player = () => {
    const base = DEMO_DATA.player
  
    const combinedObject = {
      ...data.adventurePlayer,
      base: base,
    }

    return combinedObject
    }



export default function page() {
  const [room, setRoom] = useState(data.rooms.find((r) => r.id == data.adventureInstance.roomCurrent))
  const [dial, setDial] = useState(data.dialogue.find((d)=> d.id == room?.dialogue))
  const [dialProgress, setDialProgress] = useState(data.adventureInstance.doorProgress)
  const [currentChapter, setCurrentChapter] = useState(dial?.chapterData.find((cd)=> cd.id == dialProgress))
  const [currentResponse, setCurrentResponse] = useState(dial?.responsesData[0])

  const Boss = boss()
  const Player = player()





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
        setCurrentChapter(newDial?.chapterData[0])
        setCurrentResponse(newDial?.responsesData[0])
        return
      } 

      if (dialId === dial?.id) {}
      else {
        const newDial = data.dialogue.find((d)=> d.id == dialId)
        setDial(newDial)
        setDialProgress("0D")
        setCurrentChapter(newDial?.chapterData[0])
        setCurrentResponse(newDial?.responsesData[0])
        return
      } 

      if (dialProgressId === dialProgress) {}
      else {
        const newChapter = dial.chapterData.find((cd)=> cd.id == dialProgressId)
        const newResponse = dial.responsesData.find(((rd)=> rd.id == newChapter?.responseId))
        setDialProgress(dialProgressId)
        setCurrentChapter(newChapter)
        setCurrentResponse(newResponse)
      } 
    }
  }

  return (
    <div>

      <div className='flex bg-white rounded p-2'>

        <div className=' w-3/5 bg-gray-500 border border-solid border-black rounded p-2'>

            <BossDisplay Boss={Boss} data={data}/>

              <Display data={data} room={room} dialProgress={dialProgress} currentChapter={currentChapter} Boss={Boss} Player={Player}/>

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
