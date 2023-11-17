import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import IQuizData from "../../../../interfaces/quizData";
import secondsToMs from "../../../../utils/scripts/SecondsToMs";
import QuizResult from "./components/QuizResult";
import EQuizStatus from "../../../../constants/enums";
import QuizOptions from "./components/QuizOptions";

interface IQuizProps {
  quizData: IQuizData;
  quizAnswers: string[];
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
  handleSelectAnswer: (index: number, val: any) => void;
}

const Quiz = ({
  quizData,
  quizAnswers,
  quizStatus,
  handleQuizStatus,
  handleSelectAnswer,
}: IQuizProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (!(quizData && quizStatus === EQuizStatus.RUNNING)) {
      return;
    }

    const QUESTIONS_LENGTH = quizData.questions.length - 1;

    const intervalID = setInterval(() => {
      if (!quizAnswers[questionIndex]) {
        handleSelectAnswer(questionIndex, "");
      }

      if (questionIndex !== QUESTIONS_LENGTH)
        setQuestionIndex(questionIndex + 1);

      if (questionIndex === QUESTIONS_LENGTH)
        handleQuizStatus(EQuizStatus.FINISHED);
    }, secondsToMs(quizData.questions[questionIndex].lifetimeSeconds));

    return () => clearInterval(intervalID);
  }, [quizStatus, questionIndex]);

  return (
    <Grid sx={{ gap: 2 }} container flexDirection="column" alignItems="center">
      {quizStatus === EQuizStatus.RUNNING && (
        <>
          <p>
            <b>
              <i>{quizData.questions[questionIndex].text}</i>
            </b>
          </p>

          <QuizOptions
            questions={quizData.questions}
            questionIndex={questionIndex}
            handleSelectAnswer={handleSelectAnswer}
          />
        </>
      )}

      {quizStatus === EQuizStatus.FINISHED && (
        <QuizResult quizAnswers={quizAnswers} />
      )}
    </Grid>
  );
};

export default Quiz;
