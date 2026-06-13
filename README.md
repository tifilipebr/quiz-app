# Quiz App

A interactive quiz application built with React 19, React Router v7, TypeScript, and Tailwind CSS v4.

Based on the [Quiz App project](https://roadmap.sh/projects/quiz-app) from roadmap.sh.

## Stack

- **Framework**: React Router v7 (SPA mode)
- **Language**: TypeScript (strict mode)
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Build**: Vite 8
- **Linting**: ESLint 9 + Prettier
- **Container**: Docker (multi-stage, `node:20-alpine`)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `npm run dev`         | Start dev server with HMR    |
| `npm run build`       | Production build             |
| `npm run start`       | Serve production build       |
| `npm run typecheck`   | Run TypeScript type checking |
| `npm run lint`        | Run ESLint                   |
| `npm run lint:fix`    | Run ESLint with auto-fix     |
| `npm run format`      | Check Prettier formatting    |
| `npm run format:fix`  | Auto-format with Prettier    |

## Docker

```bash
docker build -t quiz-app .
docker run -p 3000:3000 quiz-app
```

## Project Structure

```
app/
├── root.tsx              # Root layout & error boundary
├── routes.ts             # Route configuration
├── routes/
│   ├── home.tsx          # Home page
│   └── quiz.tsx          # Quiz route
├── components/
│   ├── Question.tsx      # Question display
│   └── QuizContent.tsx   # Quiz layout wrapper
├── hooks/
│   └── QuizData.tsx      # Quiz state management
├── quiz/
│   └── quiz.tsx          # Quiz page component
├── welcome/
│   └── welcome.tsx       # Welcome component
└── app.css               # Tailwind entrypoint
```
