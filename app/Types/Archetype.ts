export  type Archetype = {
  id: number;
  name: string;
  displayName: string;
  examples: string;
  description: string;
  extraDescription: string;
  archPower: {
    name: string;
    cost: number;
  }[]
  moves: string[];
  startingItems: string[];
  startingEquipment: string[];
  training: string[]
}