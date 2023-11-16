import { Grid } from "@mui/material";
import QuizPresentation from "./components/QuizPresentation";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import useQuiz from "../../hooks/app/useQuiz";
import EQuizStatus from "../../constants/enums";

const Home = () => {
  const { isLoading, quizData, quizStatus, handleQuizStatus } = useQuiz();

  return (
    <main>
      <Grid
        sx={{ pt: 10, gap: 5 }}
        container
        flexDirection="column"
        alignItems="center"
      >
        <QuizPresentation />

        <Quiz
          quizData={quizData}
          quizStatus={quizStatus}
          handleQuizStatus={handleQuizStatus}
        />

        {!isLoading && quizStatus === EQuizStatus.STOPPED && (
          <StartQuiz handleQuizStatus={handleQuizStatus} />
        )}
      </Grid>
    </main>
  );
};

export default Home;
