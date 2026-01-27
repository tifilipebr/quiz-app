import { Question } from "~/components/Question";
import { QuizContent } from "~/components/QuizContent";
import type { IQuizData } from "~/hooks/QuizData";

export function QuizPage({
  currentQuestion,
  setSelectedAnswer,
  selectedAnswer,
  currentScore,
  finished,
  answers,
  getQuestionById,
}: IQuizData) {
  return (
    <main className="flex flex-col h-full w-full justify-center items-center p-8 bg-gray-100">
      <nav>
        {finished ? (
          <h1>Quiz Finished! Score: {currentScore}</h1>
        ) : (
          <span>Current Score: {currentScore}</span>
        )}
      </nav>
      <QuizContent>
        {currentQuestion && !finished ? (
          <Question
            currentQuestion={currentQuestion}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
          />
        ) : !finished ? (
          <h1>No questions</h1>
        ) : null}
        {finished
          ? answers.map((userAnswer) => {
              try {
                const question = getQuestionById(userAnswer.questionId);
                return (
                  <Question
                    currentQuestion={question}
                    selectedAnswer={userAnswer.answer}
                    setSelectedAnswer={() => null}
                    key={question?.id}
                  />
                );
              } catch (error) {
                console.log(error);
                return null;
              }
            })
          : null}
      </QuizContent>
    </main>
  );
}
