export type Prompt = {
  id: string;
  content: {
    speaker: string;
    context: string;
  }
  responseId: string;
  responseDoors: string[];
}

export type Response = {
  id: string;
  responses: string[];
}

export type Dialogue = {
  id: string;
  promptData: Prompt[];
  responseData: Response[];
}