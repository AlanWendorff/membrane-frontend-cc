import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import QuizResult from "./components/QuizResult";
import QuizOptions from "./components/QuizOptions";
import IQuizData from "../../../../interfaces/quizData";
import secondsToMs from "../../../../utils/scripts/SecondsToMs";
import EQuizStatus from "../../../../constants/enums";

interface IQuizProps {
  quizData: IQuizData;
  quizAnswers: number[];
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
  handleSelectAnswer: (questionIndex: number, answerId: number) => void;
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
        handleSelectAnswer(questionIndex, 0);
      }

      if (questionIndex !== QUESTIONS_LENGTH)
        setQuestionIndex(questionIndex + 1);

      if (questionIndex === QUESTIONS_LENGTH)
        handleQuizStatus(EQuizStatus.RESULTS);
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

      {quizStatus === EQuizStatus.RESULTS && (
        <QuizResult quizAnswers={quizAnswers} questions={quizData.questions} />
      )}
    </Grid>
  );
};

export default Quiz;
