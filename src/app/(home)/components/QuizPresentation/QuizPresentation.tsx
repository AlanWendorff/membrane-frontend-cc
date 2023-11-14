import Image from "next/image";

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

    <Image
      src={surveyImage}
      width={220}
      height={220}
      objectFit="contain"
      alt="trivia picture"
    />
  </>
);

export default QuizPresentation;
