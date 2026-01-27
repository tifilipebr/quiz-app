import { useCallback, useEffect, useMemo, useState } from "react";

export interface IQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export interface IQuizData { 
    changeQuestion: () => void;
    setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
    isAnswerCorrect: boolean
    selectedAnswer: string;
    currentQuestion: IQuestion | null
}

export const QuizData = (): IQuizData => {
    const questions: IQuestion[] = [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
    ];
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
    const [selectedAnswer,setSelectedAnswer] = useState("");
    const [isAnswerCorrect,setIsAnswerCorrect] = useState(false);

    const currentQuestion = useMemo(() => questions[currentQuestionIndex] ?? null, [currentQuestionIndex]);

    useEffect(() => {
        if(selectedAnswer){
            const currentQuestion = getCurrentQuestion();
            if(currentQuestion){
                setIsAnswerCorrect(selectedAnswer === currentQuestion.answer);
            }
        }
    },[selectedAnswer])

    const getCurrentQuestion = useCallback(() => {
        if(questions[currentQuestionIndex]){
            return questions[currentQuestionIndex];
        }else{
            // verify if exist questions if not, fetch questions and restart index
            return null;
        }
    },[currentQuestionIndex])

    const changeQuestion = useCallback(() => {
        setCurrentQuestionIndex(prev => prev+1);
        setNextQuestionIndex(prev => prev+1);
    },[nextQuestionIndex])
 
    return {
        currentQuestion,
        changeQuestion,
        selectedAnswer,
        setSelectedAnswer,
        isAnswerCorrect,
    }
}