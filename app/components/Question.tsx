import type React from "react";
import type { IQuestion } from "~/hooks/QuizData";

type IQuestionParams = {
    selectedAnswer: string|undefined;
    currentQuestion: IQuestion|null|undefined;
    setSelectedAnswer: React.Dispatch<React.SetStateAction<string>> | undefined
}

export const Question: React.FC<IQuestionParams> = ({ selectedAnswer, currentQuestion,setSelectedAnswer }) => {
  const getButtonBorder = (option: string) => {
    if (selectedAnswer && option === currentQuestion?.answer) {
      return "border-green-600";
    } else if (selectedAnswer === option) {
      return "border-red-600";
    } else {
      return "border-white";
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">{currentQuestion?.question}</h1>
      <p className="py-4">Value: {currentQuestion?.points} points</p>
      <ul className="space-y-4">
        {currentQuestion?.options.map((option) => (
          <li
            className={
              "bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 border-2 " +
              getButtonBorder(option)
            }
            onClick={(event) => {
              event.preventDefault();
              if (selectedAnswer) {
                return;
              }
              setSelectedAnswer!(option);
            }}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};
