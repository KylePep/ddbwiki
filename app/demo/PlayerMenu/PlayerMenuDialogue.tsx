import { Dialogue, Response } from '@/app/Types/Dialogue'
import { Room } from '@/app/Types/Room'
import React from 'react'

interface PlayerMenuDialogueProps{
  currentResponse: Response,
  prepareRoomUpdate: any,
  room: Room,
  data: any
}

export default function PlayerMenuDialogue({currentResponse, prepareRoomUpdate, room, data}: PlayerMenuDialogueProps) {
  return (
    <> 
    <div className='grid grid-rows-3 col-span-2'>
      <div className='grid grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 gap-1'>
          {currentResponse.responses.map((r:any, index:number) => (
            // (roomId: string, roomState: string, dialogueId: string, promptId: string)
            <button onClick={()=>prepareRoomUpdate(room?.id, data.adventureInstance.roomState, data.adventureInstance.dialogueId, r.split('|')[1])} key={index} className='bg-blue-400 rounded hover:text-white' title={r.split('|')[1]}>{r.split('|')[0]}</button>
          ))}
        </div>
        <div className='grid col-span-2 gap-1'>
          <button className='grid col-span-2 bg-blue-400 rounded mt-1 px-2 py-1 hover:text-white'>
            HOLD4
          </button>

        </div>
    </div>
    <div className='grid grid-cols-1 gap-1'>
      <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD1</button>
      <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD2</button>
      <button className='bg-blue-400 rounded px-2 py-1 hover:text-white'>HOLD3</button>
  </div>
  </>
  )
}
