import { Enemy } from "./Enemy";

export type ActiveEnemy = Enemy & {
  enemyId: string;
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
}