import { useState } from "react";
import QuizStart from "./components/QuizStart";
import Quiz from "./components/Quiz";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <>
      {!quizStarted ? (
        <QuizStart onStart={handleStartQuiz} />
      ) : (
        <Quiz onRestart={handleRestartQuiz} />
      )}
    </>
  );
};

export default App;