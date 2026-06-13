import { QuizData } from "~/hooks/QuizData";
import { QuizPage } from "~/quiz/quiz";

import type { Route } from "./+types/home";

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
