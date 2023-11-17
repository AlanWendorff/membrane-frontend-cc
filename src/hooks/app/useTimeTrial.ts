import { useState, useEffect } from "react";
import EQuizStatus from "../../constants/enums";
import secondsToMs from "../../utils/scripts/SecondsToMs";
import IQuizData from "../../interfaces/quizData";

interface IUseTimeTrialProps {
  quizData: IQuizData;
  quizAnswers: number[];
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
  handleSelectAnswer: (questionIndex: number, answerId: number) => void;
}

interface IUseTimeTrialReturnProps {
  questionIndex: number;
}

const useTimeTrial = ({
  quizData,
  quizAnswers,
  quizStatus,
  handleSelectAnswer,
  handleQuizStatus,
}: IUseTimeTrialProps): IUseTimeTrialReturnProps => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (!(quizData && quizStatus === EQuizStatus.RUNNING)) {
      return;
    }

    const QUESTIONS_LENGTH = quizData.questions.length - 1;

    const intervalID = setInterval(() => {
      if (!quizAnswers[questionIndex]) {
        handleSelectAnswer(questionIndex, 0);
      }

      if (questionIndex !== QUESTIONS_LENGTH)
        setQuestionIndex(questionIndex + 1);

      if (questionIndex === QUESTIONS_LENGTH)
        handleQuizStatus(EQuizStatus.RESULTS);
    }, secondsToMs(quizData.questions[questionIndex].lifetimeSeconds));

    return () => clearInterval(intervalID);
  }, [quizStatus, questionIndex]);

  return { questionIndex };
};

export default useTimeTrial;
