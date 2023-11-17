export interface IQuestions {
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: IOptions[];
}

export interface IOptions {
  text: string;
}

interface IQuizData {
  id: number;
  title: string;
  image: string;
  questions: IQuestions[];
}

export default IQuizData;
