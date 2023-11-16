import SURVEY from "../data/survey.json";
import IQuizData from "../interfaces/quizData";

const getSurvey = (): Promise<IQuizData> => {
  return new Promise((resolve) => setTimeout(() => resolve(SURVEY), 1000));
};

export default getSurvey;
