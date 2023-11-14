interface IQuizPresentationProps {
  surveyTitle: string;
  surveyImage: string;
}

const QuizPresentation = ({
  surveyTitle,
  surveyImage,
}: IQuizPresentationProps) => (
  <>
    <h1>{surveyTitle}</h1>

    <img src={surveyImage} width={220} height={220} alt="trivia picture" />
  </>
);

export default QuizPresentation;
