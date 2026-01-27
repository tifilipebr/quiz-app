import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col h-full w-full justify-evenly items-center p-8 bg-gray-100">
      <section>
        <Link to="/quiz">
          <button className="border p-3 border-green-600 bg-green-600 text-white rounded-lg w-sm text-lg font-semibold cursor-pointer hover:bg-green-700 hover:border-green-700">
            Start
          </button>
        </Link>
      </section>
      <section className="max-w-md">
        <p className="text-base">
          This quiz is to test your knowledge about React Framework.
        </p>
        <p>
          {" "}
          It will cover the basic concepts of React Framework and how to build a
          simple app using React.
        </p>
        <p>
          When you press the start button, you will be redirected to the quiz
          page.
        </p>
        <p>
          And then you can answer the questions. At the end of the quiz, you
          will get your score.
        </p>
      </section>
    </main>
  );
}
