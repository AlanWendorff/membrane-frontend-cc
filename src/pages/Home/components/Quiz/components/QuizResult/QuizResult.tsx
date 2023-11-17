import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import useQuizContract from "../../../../../../hooks/contract/useQuizContract";
import { IQuestions } from "../../../../../../interfaces/quizData";

interface IQuizResultProps {
  quizAnswers: number[];
  questions: IQuestions[];
}

const QuizResult = ({ quizAnswers, questions }: IQuizResultProps) => {
  const { submitAnswers } = useQuizContract();

  return (
    <Grid sx={{ gap: 2 }} container flexDirection="column" alignItems="center">
      <h2>Your answers:</h2>

      <List sx={{ width: "184px" }}>
        {questions.map(({ options }, index) => (
          <ListItem key={index}>
            <ListItemText primary={options[quizAnswers[index]].text} />
          </ListItem>
        ))}
      </List>

      <Button
        onClick={() => submitAnswers(0, quizAnswers)}
        variant="contained"
        color="secondary"
        aria-label="Submit quiz"
      >
        Submit Quiz
      </Button>
    </Grid>
  );
};

export default QuizResult;
