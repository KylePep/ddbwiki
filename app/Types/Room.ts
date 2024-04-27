export type Room = {
  id: string;
  doors: string[];
  eventType: "bossBattle" | "battleWin" | "battleLose";
  clearCondition: string;
  setting: string;
  NPC: string[]
}
