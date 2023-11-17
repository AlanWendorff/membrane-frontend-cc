import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { IQuestions } from "../../../../../../interfaces/quizData";

interface IQuizOptionsProps {
  questions: IQuestions[];
  questionIndex: number;
  handleSelectAnswer: (questionIndex: number, answerId: number) => void;
}

const QuizOptions = ({
  questions,
  questionIndex,
  handleSelectAnswer,
}: IQuizOptionsProps) => {
  const INITIAL_BUTTON_STATUS = Array(questions.length).fill(0);
  const VARIABLE_BUTTON_STATUS = Array(questions.length).fill(0);
  const [btnStatus, setStatus] = useState(INITIAL_BUTTON_STATUS);

  useEffect(() => {
    setStatus(INITIAL_BUTTON_STATUS);
  }, [questionIndex]);

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {questions[questionIndex].options.map(({ text }, index) => (
        <Button
          key={text}
          onClick={() => {
            handleSelectAnswer(questionIndex, index);
            setStatus(INITIAL_BUTTON_STATUS);
            VARIABLE_BUTTON_STATUS[index] = 1;
            setStatus(VARIABLE_BUTTON_STATUS);
          }}
          aria-label="Select option"
          variant={btnStatus[index] === 1 ? "contained" : "outlined"}
          color="secondary"
        >
          {text}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default QuizOptions;
