import { Grid } from "@mui/material";
import QuizPresentation from "./components/QuizPresentation";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import useQuiz from "../../hooks/app/useQuiz";
import EQuizStatus from "../../constants/enums";

const Survey = () => {
  const {
    isLoading,
    quizAnswers,
    quizData,
    quizStatus,
    handleQuizStatus,
    handleSelectAnswer,
  } = useQuiz();

  return (
    <Grid
      sx={{ pt: 10, gap: 5 }}
      container
      flexDirection="column"
      alignItems="center"
    >
      <QuizPresentation />

      {quizData && (
        <Quiz
          quizData={quizData}
          quizAnswers={quizAnswers}
          quizStatus={quizStatus}
          handleQuizStatus={handleQuizStatus}
          handleSelectAnswer={handleSelectAnswer}
        />
      )}

      {!isLoading && quizStatus === EQuizStatus.STOPPED && (
        <StartQuiz handleQuizStatus={handleQuizStatus} />
      )}
    </Grid>
  );
};

export default Survey;
