export type Move = {
  id: number;
  name: string;
  displayName: string;
  type: string;
  subType: string;
  range: string[];
  damage: number;
  accuracy: number;
  effect: string;
  cost: {
    value: string;
    type: string;
  }
  description: string;
  descriptionParams: string;
  extraDescription: string;
}