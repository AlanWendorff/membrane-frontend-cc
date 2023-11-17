import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import useQuizContract from "../../../../../../hooks/contract/useQuizContract";
import IQuizData from "../../../../../../interfaces/quizData";

interface IQuizResultProps {
  quizData: IQuizData;
  quizAnswers: number[];
}

const QuizResult = ({ quizData, quizAnswers }: IQuizResultProps) => {
  const { submitAnswers } = useQuizContract();

  const { id, questions } = quizData;

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
        onClick={() => submitAnswers(id, quizAnswers)}
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
