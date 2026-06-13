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
    <main className="flex flex-col h-full w-full justify-center items-center p-8 bg-gray-100 min-h-fit">
      <nav className="flex flex-col justify-center items-center py-5 bg-lime-300 w-lg rounded-md gap-y-4">
        {finished ? (
          <>
            <h1 className="text-xl font-semibold">Quiz Finished!</h1>
            <span className="border rounded-lg border-lime-500 bg-lime-500 p-6 text-lg text-white font-semibold">
              Score: {currentScore} points
            </span>
          </>
        ) : (
          <span>Current Score: {currentScore} points</span>
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
        ) : (
          <h1 className="text-xl font-semibold">Questions</h1>
        )}
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
