import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quiz App" },
    { name: "description", content: "Quiz App to practice state management using React!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
