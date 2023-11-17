import { Grid } from "@mui/material";
import QuizResult from "./components/QuizResult";
import QuizOptions from "./components/QuizOptions";
import IQuizData from "../../../../interfaces/quizData";
import EQuizStatus from "../../../../constants/enums";
import useTimeTrial from "../../../../hooks/app/useTimeTrial";

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
  const { questionIndex } = useTimeTrial({
    quizData,
    quizAnswers,
    quizStatus,
    handleQuizStatus,
    handleSelectAnswer,
  });

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
        <QuizResult quizData={quizData} quizAnswers={quizAnswers} />
      )}
    </Grid>
  );
};

export default Quiz;
