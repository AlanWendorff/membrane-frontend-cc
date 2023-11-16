import { Grid, ButtonGroup, Button } from "@mui/material";
import { useEffect, useState } from "react";
import IQuizData from "../../../../interfaces/quizData";
import secondsToMs from "../../../../utils/scripts/SecondsToMs";
import QuizResult from "./components/QuizResult";
import EQuizStatus from "../../../../constants/enums";

interface IQuizProps {
  quizData: IQuizData | null;
  quizStatus: EQuizStatus;
  handleQuizStatus: (status: EQuizStatus) => void;
}

const Quiz = ({ quizData, quizStatus, handleQuizStatus }: IQuizProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (!(quizData && quizStatus === EQuizStatus.RUNNING)) {
      return;
    }

    const QUESTIONS_LENGTH = quizData.questions.length - 1;

    const intervalID = setInterval(() => {
      if (questionIndex !== QUESTIONS_LENGTH)
        setQuestionIndex(questionIndex + 1);

      if (questionIndex === QUESTIONS_LENGTH)
        handleQuizStatus(EQuizStatus.FINISHED);
    }, secondsToMs(quizData!.questions[questionIndex].lifetimeSeconds));

    return () => clearInterval(intervalID);
  }, [quizStatus, questionIndex]);

  return (
    <Grid sx={{ gap: 2 }} container flexDirection="column" alignItems="center">
      {quizStatus === EQuizStatus.RUNNING && (
        <>
          <p>
            <b>{quizData?.questions[questionIndex].text}</b>
          </p>

          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            color="secondary"
          >
            {quizData?.questions[questionIndex].options.map(
              ({ text }, index) => (
                <Button
                  aria-aria-label={`select ${text}`}
                  key={index}
                  onClick={() => console.log(text)}
                >
                  <b>{text}</b>
                </Button>
              )
            )}
          </ButtonGroup>
        </>
      )}

      {quizStatus === EQuizStatus.FINISHED && <QuizResult />}
    </Grid>
  );
};

export default Quiz;
