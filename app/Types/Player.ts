export type Player = {
  id: string;
  name: string;
  level: number;
  origin: string;
  archetype: string;
  pronouns: string;
  bodyType: string;
  height: string;
  description: string;
  stats: {
    mod: number;
    spirit: number;
    ki: number;
    power: number;
    agility: number;
    toughness: number;
  }
  equipment: string[];
  inventory: string[];
  forms: string[];
}