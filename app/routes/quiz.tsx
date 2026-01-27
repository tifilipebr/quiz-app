import { QuizData } from "~/hooks/QuizData";
import type { Route } from "./+types/home";
import { QuizPage } from "~/quiz/quiz";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quiz Page" },
    {
      name: "description",
      content: "Quiz App to practice state management using React!",
    },
  ];
}

export default function QuizRoute() {
  const {
    currentQuestion,
    setSelectedAnswer,
    isAnswerCorrect,
    changeQuestion,
    selectedAnswer
  } = QuizData();
  return (
    <QuizPage
      currentQuestion={currentQuestion}
      setSelectedAnswer={setSelectedAnswer}
      isAnswerCorrect={isAnswerCorrect}
      changeQuestion={changeQuestion}
      selectedAnswer={selectedAnswer}
    />
  );
}
