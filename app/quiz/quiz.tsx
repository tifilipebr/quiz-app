'use client'
import type { IQuizData } from "~/hooks/QuizData";

export function QuizPage({
  currentQuestion,
  setSelectedAnswer,
  selectedAnswer,
  isAnswerCorrect,
  changeQuestion,
}: IQuizData) {
  const getButtonBorder = (option:string) => {
    if (selectedAnswer && option === currentQuestion?.answer) {
      return "border-green-600"
    }else if(selectedAnswer === option){
      return "border-red-600"
    }else{
      return "border-white";
    }
  };
  if (!currentQuestion) {
    return <h1>no question available</h1>;
  }
  return (
    <main className="flex flex-col h-full w-full justify-center items-center p-8 bg-gray-100">
      <section className="flex flex-col justify-start p-6 bg-gray-50 w-md">
        <h1 className="text-2xl font-bold mb-6">{currentQuestion.question}</h1>
        <ul className="space-y-4">
          {currentQuestion.options.map((option: string) => (
            <li
              className={
                "bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 border-2 " +
                getButtonBorder(option)
              }
               onClick={(event) => {
                  event.preventDefault();
                  if(selectedAnswer){
                    return;
                  }
                  setSelectedAnswer(option);
                }}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
