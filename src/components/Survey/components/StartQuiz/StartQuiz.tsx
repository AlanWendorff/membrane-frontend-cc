import { Button } from "@mui/material";
import EQuizStatus from "../../../../constants/enums";

interface IStartQuizProps {
  handleQuizStatus: (status: EQuizStatus) => void;
}

const StartQuiz = ({ handleQuizStatus }: IStartQuizProps) => (
  <Button
    onClick={() => handleQuizStatus(EQuizStatus.RUNNING)}
    variant="contained"
    color="secondary"
    aria-label="Start quiz"
  >
    Start Quiz
  </Button>
);

export default StartQuiz;
