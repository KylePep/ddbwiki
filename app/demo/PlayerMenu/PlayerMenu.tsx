import { ITEM_TYPES, MOVE_TYPES } from '@/shared/constants'
import React, { useState } from 'react'
import { ActivePlayer } from '../../Types/ActivePlayer'
import { Dialogue, Response } from '../../Types/Dialogue'
import { Room } from '../../Types/Room'
import { Player } from '../../Types/Player'
import PlayerMenuHeader from './PlayerMenuHeader'
import PlayerMenuDialogue from './PlayerMenuDialogue'
import PlayerMenuWaiting from './PlayerMenuWaiting'
import PlayerMenuActive from './PlayerMenuActive'

interface PlayerMenuProps{
  Player: ActivePlayer,
  data: any,
  updateRoom: any,
  currentResponse: Response,
  dial: Dialogue,
  room: Room
}


export default function PlayerMenu({Player, data, updateRoom, currentResponse, dial, room}: PlayerMenuProps) {


const [currentCharactersTurn, setCurrentCharacterTurn] = useState("Aspara")

const prepareRoomUpdate = (roomId: string, roomState: string, dialogueId: string, promptId: string) =>{
    const newAdventureInstance = data.adventureInstance;
    newAdventureInstance.roomId = roomId;
    newAdventureInstance.roomState = roomState;
    newAdventureInstance.dialogueId = dialogueId;
    newAdventureInstance.promptId = promptId;
    console.log(newAdventureInstance)
    updateRoom(newAdventureInstance)
}

const endTurn = (character: string) => {
  data.turnData.totalTurns++
  setCurrentCharacterTurn(character)
}

  return (
      <>
          <PlayerMenuHeader Player={Player}/>

            <div className='grid grid-cols-3 gap-1 min-h-36'>
            {
              data.adventureInstance.roomState == "start" &&
              <PlayerMenuDialogue currentResponse={currentResponse} prepareRoomUpdate={prepareRoomUpdate} room={room} data={data}/>
            }
  
            { data.adventureInstance.roomState == "battle" &&
            <>
              {
                currentCharactersTurn == Player.name && 
                  <PlayerMenuActive endTurn={endTurn} data={data} Player={Player}/>
                }
                {
                  currentCharactersTurn != Player.name &&
                  <PlayerMenuWaiting currentCharactersTurn={currentCharactersTurn} endTurn={endTurn} data={data} />
                }
            
              </>
              }
            </div>
      </>
    )
}
