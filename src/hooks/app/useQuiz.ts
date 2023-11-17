import { useEffect, useState } from "react";
import IQuizData from "../../interfaces/quizData";
import getSurvey from "../../services/getSurvey";
import EQuizStatus from "../../constants/enums";

interface IUseQuizReturnProps {
  isLoading: boolean;
  quizAnswers: string[];
  quizData: IQuizData | null;
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
  handleSelectAnswer: (index: number, val: any) => void;
}

const useQuiz = (): IUseQuizReturnProps => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizStatus, setQuizStatus] = useState(EQuizStatus.STOPPED);
  const [quizData, setQuizData] = useState<IQuizData | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleQuizStatus = (status: EQuizStatus) => {
    setQuizStatus(status);
  };

  const handleSelectAnswer = (index: number, val: any) => {
    let answers = quizAnswers;
    answers[index] = val;
    setQuizAnswers(answers);
  };

  useEffect(() => {
    getSurvey().then((survey) => {
      setQuizData(survey);
      setIsLoading(!isLoading);
    });
  }, []);

  return {
    isLoading,
    quizAnswers,
    quizData,
    quizStatus,
    handleQuizStatus,
    handleSelectAnswer,
  };
};

export default useQuiz;
