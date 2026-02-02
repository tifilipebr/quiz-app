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
  const quizData = QuizData();
  return <QuizPage {...quizData} />;
}
