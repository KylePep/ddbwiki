export type AdventurePlayerData = {
  playerId: string;
  playerRole: string;
  adventureId: string;
  room: string;
  roomType: string;
  playerState:{
    hp: string;
    sparkingMeter: string;
    archCounter: string;
    statusEffects?: string[];
  }
}