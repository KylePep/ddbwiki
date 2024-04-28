import { ENEMY_TYPES } from '@/shared/constants';
import React from 'react'
import { Room } from '../Types/Room';
import { Prompt } from '../Types/Dialogue';
import { ActiveEnemy } from '../Types/ActiveEnemy';
import { ActivePlayer } from '../Types/ActivePlayer';

interface DisplayProps{
  data: any,
  room: Room,
  roomState: string,
  currentPrompt: Prompt,
  Boss: ActiveEnemy,
  Player: ActivePlayer
}

export default function Display({data, room, roomState, currentPrompt, Boss, Player}: 
DisplayProps) {

const getEnemyByName = (name: string | undefined) => {
    if (name == undefined) return
    let character = ENEMY_TYPES.find((enemy) => enemy.name === name)
    if (!character){
      character = data.allyList.find((ally: any) => ally === name)
    }
    if(!character){
      return
    }
    return character
  }

  function replacePlayerName(str: string | undefined) {
    if (str == undefined) return
    // Regular expression to match %playerName%
    // Replace %playerName% with Player.base.name
    str = str.replace(/%playerName%/g, Player.name);
      
    // Replace %PLAYERNAME% with Player.base.name in all caps
    str = str.replace(/%PLAYERNAME%/g, Player.name.toUpperCase());

    return str;
  }

  return (
    <>
          <div className=' text-center text-white '>
            <div className='bg-black border border-white rounded min-h-24'>
              { roomState == "start" &&
                <div>
                  <p>{room?.id} {room?.setting} - 
                    {room?.doors.map((d:any, index:number)=>(
                      <span key={index}>{d} </span>
                    ))}
                  </p>
                  <p>{roomState} - {getEnemyByName(currentPrompt?.content.speaker)?.displayName}: { replacePlayerName(currentPrompt?.content.context) }</p>
                </div>
              }

              { roomState == "battle" &&
                <p>{Boss.displayName} is {data.adventureInstance.enemyData[0].distance}. He {`won't`} show any mercy.</p>
              }

            </div>
          </div>
    </>
  )
}
