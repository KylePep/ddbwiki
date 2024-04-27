import { Player } from "./Player";

export type ActivePlayer = Player &{
  base: Player;
  id: string;
  playerRole: string;
  adventureId: string;
  room: string;
  roomType: string
  playerState:{
    hp: string;
    sparkingMeter: string;
    archCounter: string;
    statusEffects: string[];
  }
}