import { useWeb3 } from "react-dapp-web3";
import { Grid } from "@mui/material";
import QuizPresentation from "./components/QuizPresentation";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import useQuiz from "../../hooks/app/useQuiz";
import EQuizStatus from "../../constants/enums";
import useNetwork from "../../hooks/app/useNetwork";

const Home = () => {
  const { isWalletConnected } = useWeb3();
  const {
    isLoading,
    quizAnswers,
    quizData,
    quizStatus,
    handleQuizStatus,
    handleSelectAnswer,
  } = useQuiz();
  const { isTargetNetworkSelected } = useNetwork();

  if (!isTargetNetworkSelected) {
    return (
      <main>
        <Grid
          sx={{ pt: 10, gap: 5 }}
          container
          flexDirection="column"
          alignItems="center"
        >
          <h1>Change network to begin</h1>
        </Grid>
      </main>
    );
  }

  if (!isWalletConnected) {
    return (
      <main>
        <Grid
          sx={{ pt: 10, gap: 5 }}
          container
          flexDirection="column"
          alignItems="center"
        >
          <h1>Login to begin</h1>
        </Grid>
      </main>
    );
  }

  return (
    <main>
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
    </main>
  );
};

export default Home;
