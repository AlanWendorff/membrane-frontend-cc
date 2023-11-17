import { CircularProgress } from "@mui/material";
import useQuiz from "../../../../hooks/app/useQuiz";

const QuizPresentation = () => {
  const { isLoading, quizData } = useQuiz();

  if (isLoading) {
    return <CircularProgress sx={{ mt: 15 }} />;
  }

  return (
    <>
      <h1>{quizData?.title}</h1>

      <img src={quizData?.image} width={200} alt="trivia picture" />
    </>
  );
};

export default QuizPresentation;
