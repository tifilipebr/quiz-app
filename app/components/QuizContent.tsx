import type { FC, ReactNode } from "react";

export const QuizContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-col justify-start p-6 w-md min-h-fit gap-10">{children}</section>
  );
};
