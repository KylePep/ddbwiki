export type Enemy = {
  id: number;
  adventure?: string[] | [];
  name: string;
  displayName: string;
  baseLevel: number;
  baseStats: {
    spirit: number;
    ki: number;
    power: number;
    agility: number;
    toughness: number;
  }
  type: string;
  archetype: string;
  origin: string;
  bodyType: string;
  height: string;
  pronouns: string;
  allegiance: string;
  description: string;
  appearance: string;
  uniqueMoves: string[] | [];
  equipment: string[] | [];
}