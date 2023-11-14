import { NextPage } from "next";
import { Grid } from "@mui/material";
import QuizPresentation from "./components/QuizPresentation";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import SubmitQuiz from "./components/SubmitQuiz";

const Home: NextPage = () => (
  <main>
    <Grid
      sx={{ pt: 10, gap: 5 }}
      container
      flexDirection="column"
      alignItems="center"
    >
      <QuizPresentation
        surveyTitle="Lorem Ipsum"
        surveyImage="https://48tools.com/wp-content/uploads/2015/09/shortlink.png"
      />

      <Quiz />

      <QuizResult />

      <StartQuiz />
      <SubmitQuiz />
    </Grid>
  </main>
);

export default Home;
