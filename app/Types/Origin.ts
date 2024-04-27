export type Origin = {
  id: number;
  name: string;
  displayName: string;
  description: string;
  extraDescription: string;
  positiveTrait: string;
  negativeTrait: string;
  awakenings: string[];
  moves: string[];
}

// {
//   "id": 1,
//   "name": "saiyan",
//   "displayName": "Saiyan",
//   "description": "A race of space barbarians with the power to transform into Great Apes.",
//   "extraDescription": "",
//   "positiveTrait": "power",
//   "negativeTrait": "spirit",
//   "forms": ["greatApe"],
//   "moves": []
// }