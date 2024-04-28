import { AdventureInstance } from "../Types/AdventureInstance"
import { Dialogue, Prompt, Response } from "../Types/Dialogue"
import { Room } from "../Types/Room"


export const updateTurn = (turnProgressId: string) => {

  // "turnData": {
  //   "totalTurns": 0,
  //   "turnOrder": [],
  //   "currentCharactersTurn": "",
  //   "turnPhase": ""
  // }

    if (turnProgressId == "init"){
      //Create turn if there isnt one, zero it out
      // if (!turnData) - create turnData
    } else if(turnProgressId == "setup") {
      // Perform upkeep and cleanup
      // (+/-) stats based on awakenings etc
      // refill actions based on ki etc
    } else if (turnProgressId == "idle") {
      // This is where players will be in control or where the enemy 'AI' makes its choices.
    } else if (turnProgressId == "action"){
      // Perform selected actions, either return to idle or to resolution
    } else if (turnProgressId == "resolution"){
      // assign damage, perform status affects, totalTurns += 1, currentCharacterTurn = next character in turnOrder, turnPhase = setup
    }
}

export const updateRoom = (currentAdventureInstance: AdventureInstance, NewAdventureInstance: AdventureInstance, progressId: string, data: any)=> {

  interface transformedRoomData {
    newRoom: Room;
    newDial: Dialogue;
    newPrompt: Prompt;
    newResponse: Response;
  }

  const transformedRoomStatus: transformedRoomData = {
    newRoom: {} as Room,
    newDial: {} as Dialogue,
    newPrompt: {} as Prompt,
    newResponse: {} as Response
  }
    //Change room mode
    if (progressId){
      if (progressId == "exit"){
        data.adventureInstance.roomsProgress = "battle"
        return
      }

    } else {
      if (currentAdventureInstance.roomId != NewAdventureInstance.roomId){
        transformedRoomStatus.newRoom = data.rooms.find((r: Room)=> r.id == NewAdventureInstance.roomId) ?? data.rooms[0]
      }
      if (currentAdventureInstance.dialogueId != NewAdventureInstance.dialogueId){
        transformedRoomStatus.newDial = data.dialogue.find((d: Dialogue)=> d.id == NewAdventureInstance.dialogueId) ?? data.dialogue[0]
      }
      
      if (currentAdventureInstance.promptId != NewAdventureInstance.promptId){
        transformedRoomStatus.newPrompt = data.promptData.find((pd: Prompt)=> pd.id == NewAdventureInstance.promptId) ?? data.dialogue.promptData[0]
      }

      if (currentAdventureInstance.responseId != NewAdventureInstance.responseId){
        transformedRoomStatus.newResponse = data.responseData.find(((rd: Response)=> rd.id == NewAdventureInstance.responseId)) ?? data.dialogue[0].responseData[0]
      }
      
      return transformedRoomStatus;

    }



    //Change Room
    // else {
    //   const newRoom: Room = data.rooms.find((r)=> r.id == roomId) ?? data.rooms[0]
    //   const newDial: Dialogue = data.dialogue.find((d)=> d.id == newRoom?.dialogue) ?? data.dialogue[0]
    //   if (newRoom){
    //     setRoom(newRoom)
    //     setDialProgress(newRoom.dialogue)
    //     if (newDial){
    //         setDial(newDial)
    //         setCurrentPrompt(newDial?.promptData[0])
    //         setCurrentResponse(newDial?.responseData[0])
    //       }
    //   }
    // } 

    // if (dialId === dial?.id) {}
    // else {
    //   const newDial: Dialogue = data.dialogue.find((d)=> d.id == dialId) ?? data.dialogue[0]
    //   setDial(newDial)
    //   setDialProgress("0D")
    //   if(newDial) {
    //     setCurrentPrompt(newDial?.promptData[0])
    //     setCurrentResponse(newDial?.responseData[0])
    //   }
    // } 

    // if (dialProgressId === dialProgress) {}
    // else {
    //   const newPrompt = dial.promptData.find((cd)=> cd.id == dialProgressId)
    //   const newResponse: Response = dial.responseData.find(((rd)=> rd.id == newPrompt?.responseId)) ?? data.dialogue[0].responseData[0]
    //   setDialProgress(dialProgressId)
    //   if(newPrompt)
    //   setCurrentPrompt(newPrompt)
    //   if (newResponse)
    //   setCurrentResponse(newResponse)
    // } 

}

