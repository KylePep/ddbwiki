export type AdventureInstance = {
  adventureId: string;
  adventureRooms?: string[];
  roomId: string;
  dialogueId: string;
  promptId: string;
  responseId: string;
  players: string[] | [];
  enemyData: {
    id: string;
    name: string;
    level: number;
    stats: {
      spirit: number;
      ki: number;
      power: number;
      agility: number;
      toughness: number;
    }
    hp: string;
    sparkingMeter: string;
    archCounter: string;
    statusEffects?: string[];
    distance: string;
  }[] | []
}