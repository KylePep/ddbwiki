export type Awakening = {
  id: number;
  name: string;
  displayName: string;
  type: string;
  subType: string;
  useable: string[];
  reqParams: string[];
  upkeep: string[];
  positives: string[];
  negatives: string[];
  moves: string[];
  moveBlacklist: string[];
  description: string;
  extraDescription: string;
}