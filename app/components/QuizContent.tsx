import type { FC, JSX, ReactNode } from "react";

export const QuizContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-col justify-start p-6 bg-gray-50 w-md h-100">
      {children }
    </section>
  );
};
