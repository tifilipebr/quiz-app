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
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    points: 10,
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Silver"],
    answer: "Oxygen",
    points: 5,
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci",
    points: 20,
  },
  {
    id: 6,
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    answer: "Portuguese",
    points: 5,
  },
  {
    id: 7,
    question: "Which company developed the iPhone?",
    options: ["Samsung", "Microsoft", "Google", "Apple"],
    answer: "Apple",
    points: 10,
  },
];

export const QuizData = (): IQuizData => {
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex] ?? null,
    [currentQuestionIndex],
  );

  const changeQuestion = useCallback(() => {
    if (currentQuestionIndex >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedAnswer("");
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (selectedAnswer === "" || currentQuestion === null) {
      return;
    }
    const isAnswercorrect = selectedAnswer === currentQuestion.answer;
    setAnswers((prev) => [...prev, { questionId: currentQuestion.id, answer: selectedAnswer }]);
    if (isAnswercorrect) {
      setCurrentScore((prev) => prev + currentQuestion.points);
    }
    const changeQuestionTimeout = setTimeout(() => {
      changeQuestion();
    }, 1500);
    return () => {
      clearTimeout(changeQuestionTimeout);
    };
  }, [selectedAnswer, currentQuestion, changeQuestion]);

  const getQuestionById = useCallback(
    (id: number) => questions.find((question) => question.id === id),
    [],
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
