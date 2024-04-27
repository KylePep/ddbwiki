import { ENEMY_TYPES } from '@/shared/constants';
import React from 'react'

interface DisplayProps{
  data: any,
  room: any,
  dialProgress: any,
  currentChapter: any,
  Boss: any,
  Player: any
}

export default function Display({data, room, dialProgress, currentChapter, Boss, Player}: 
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
    str = str.replace(/%playerName%/g, Player.base.name);
      
    // Replace %PLAYERNAME% with Player.base.name in all caps
    str = str.replace(/%PLAYERNAME%/g, Player.base.name.toUpperCase());

    return str;
  }

  return (
    <>
          <div className=' text-center text-white '>
            <div className='bg-black border border-white rounded min-h-24'>
              { data.adventureInstance.roomsProgress == "start" &&
                <div>
                  <p>{room?.id} {room?.setting} - 
                    {room?.doors.map((d:any, index:number)=>(
                      <span key={index}>{d} </span>
                    ))}
                  </p>
                  <p>{dialProgress} - {getEnemyByName(currentChapter?.content.speaker)?.displayName}: { replacePlayerName(currentChapter?.content.dialogue) }</p>
                </div>
              }

              { data.adventureInstance.roomsProgress == "battle" &&
                <p>{Boss.base?.displayName} is {data.adventureInstance.enemyData[0].distance}. He {`won't`} show any mercy.</p>
              }

            </div>
          </div>
    </>
  )
}
