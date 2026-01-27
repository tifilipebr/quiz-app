import { useCallback, useEffect, useMemo, useState } from "react";

export interface IQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  points: number;
}
export interface IAnswer {
  questionId: number;
  answer: string;
}

export interface IQuizData {
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  selectedAnswer: string;
  currentQuestion: IQuestion | null;
  currentScore: number;
  finished: boolean;
  answers: IAnswer[];
  getQuestionById: (id: number) => IQuestion | undefined;
}

export const QuizData = (): IQuizData => {
  const questions: IQuestion[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      points: 10,
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      points: 15,
    },
  ];
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex] ?? null,
    [currentQuestionIndex],
  );

  useEffect(() => {
    if (selectedAnswer) {
      const currentQuestion = getCurrentQuestion();
      if (currentQuestion) {
        const isAnswercorrect = selectedAnswer === currentQuestion.answer;
        setAnswers((answers) => [
          ...answers,
          { questionId: currentQuestion.id, answer: selectedAnswer },
        ]);
        if (isAnswercorrect) {
          setCurrentScore((prev) => prev + currentQuestion.points);
        }
        const changeQuestionTimeout = setTimeout(() => {
          changeQuestion();
        }, 1500);
        return () => clearTimeout(changeQuestionTimeout);
      }
    }
  }, [selectedAnswer]);

  const getCurrentQuestion = useCallback(() => {
    if (questions[currentQuestionIndex]) {
      return questions[currentQuestionIndex];
    } else {
      // verify if exist questions if not, fetch questions and restart index
      return null;
    }
  }, [currentQuestionIndex]);

  const changeQuestion = useCallback(() => {
    if (nextQuestionIndex >= questions.length - 1) {
      setFinished(true);
      return;
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setNextQuestionIndex((prev) => prev + 1);
      setSelectedAnswer("");
    }
  }, [nextQuestionIndex]);

  const getQuestionById = useCallback(
    (id: number) => questions.find((question) => question.id === id),
    [questions],
  );

  return {
    currentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    currentScore,
    finished,
    answers,
    getQuestionById,
  };
};
