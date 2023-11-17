import { useEffect, useState } from "react";
import IQuizData from "../../interfaces/quizData";
import getSurvey from "../../services/getSurvey";
import EQuizStatus from "../../constants/enums";

interface IUseQuizReturnProps {
  isLoading: boolean;
  quizAnswers: number[];
  quizData: IQuizData | null;
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
  handleSelectAnswer: (questionIndex: number, answerId: number) => void;
}

const useQuiz = (): IUseQuizReturnProps => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizStatus, setQuizStatus] = useState(EQuizStatus.STOPPED);
  const [quizData, setQuizData] = useState<IQuizData | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const handleQuizStatus = (status: EQuizStatus) => {
    setQuizStatus(status);
  };

  const handleSelectAnswer = (questionIndex: number, answerId: number) => {
    quizAnswers[questionIndex] = answerId;
    setQuizAnswers(quizAnswers);
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
