import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import useQuizContract from "../../../../../../hooks/contract/useQuizContract";

interface IQuizResultProps {
  quizAnswers: string[];
}

const QuizResult = ({ quizAnswers }: IQuizResultProps) => {
  const { submitAnswers } = useQuizContract();

  return (
    <Grid sx={{ gap: 2 }} container flexDirection="column" alignItems="center">
      <h2>Your answers:</h2>

      <List sx={{ width: "184px" }}>
        {quizAnswers.map((answer, index) => (
          <ListItem key={index}>
            <ListItemText primary={answer} />
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
