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

export const updateRoomByAdventureStatus = (data: any, currentAdventureInstance: AdventureInstance, newAdventureInstance: AdventureInstance)=> {

  interface transformedRoomData {
    newRoom: Room;
    newRoomState: string;
    newDial: Dialogue;
    newPrompt: Prompt;
    newResponse: Response;
  }

  const transformedRoomStatus: transformedRoomData = {
    newRoom: {} as Room,
    newRoomState: "",
    newDial: {} as Dialogue,
    newPrompt: {} as Prompt,
    newResponse: {} as Response
  }
    //Change room mode
      if (newAdventureInstance.promptId == "exit"){
        data.adventureInstance.roomState = "battle"
        newAdventureInstance.promptId = "0D"
      } 

      if (currentAdventureInstance.roomId != newAdventureInstance.roomId){
        transformedRoomStatus.newRoom = data.rooms.find((r: Room)=> r.id == newAdventureInstance.roomId) ?? data.rooms[0]
      } else transformedRoomStatus.newRoom = data.rooms.find((r: Room)=> r.id == currentAdventureInstance.roomId) ?? data.rooms[0]

      if (currentAdventureInstance.roomState != newAdventureInstance.roomState){
        transformedRoomStatus.newRoomState = newAdventureInstance.roomState
      } else transformedRoomStatus.newRoomState = currentAdventureInstance.roomState

      if (currentAdventureInstance.dialogueId != newAdventureInstance.dialogueId){
        transformedRoomStatus.newDial = data.dialogue.find((d: Dialogue)=> d.id == newAdventureInstance.dialogueId) ?? data.dialogue[0]
      } else transformedRoomStatus.newDial = data.dialogue.find((d: Dialogue)=> d.id == currentAdventureInstance.dialogueId) ?? data.dialogue[0]
      
      if (currentAdventureInstance.promptId != newAdventureInstance.promptId){
        transformedRoomStatus.newPrompt = transformedRoomStatus.newDial.promptData.find((pd: Prompt)=> pd.id == newAdventureInstance.promptId) ?? data.dialogue.promptData[0]
        transformedRoomStatus.newResponse = transformedRoomStatus.newDial.responseData.find(((rd: Response)=> rd.id == transformedRoomStatus.newPrompt.responseId)) ?? data.dialogue[0].responseData[0]
      } else {
        transformedRoomStatus.newPrompt = transformedRoomStatus.newDial.promptData.find((pd: Prompt)=> pd.id == currentAdventureInstance.promptId) ?? data.dialogue.promptData[0]
        transformedRoomStatus.newResponse = transformedRoomStatus.newDial.responseData.find(((rd: Response)=> rd.id == transformedRoomStatus.newPrompt.responseId)) ?? data.dialogue[0].responseData[0]
      }
      
    return transformedRoomStatus;

}

