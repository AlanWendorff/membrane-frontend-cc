import { useEffect, useState } from "react";
import IQuizData from "../../interfaces/quizData";
import getSurvey from "../../services/getSurvey";
import EQuizStatus from "../../constants/enums";

interface IUseQuizReturnProps {
  isLoading: boolean;
  quizData: IQuizData | null;
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
}

const useQuiz = (): IUseQuizReturnProps => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizStatus, setQuizStatus] = useState(EQuizStatus.STOPPED);
  const [quizData, setQuizData] = useState<IQuizData | null>(null);

  const handleQuizStatus = (status: EQuizStatus) => {
    setQuizStatus(status);
  };

  useEffect(() => {
    getSurvey().then((survey) => {
      setQuizData(survey);
      setIsLoading(!isLoading);
    });
  }, []);

  return { isLoading, quizData, quizStatus, handleQuizStatus };
};

export default useQuiz;
