import { useState } from "react";
import QuizStart from "./components/QuizStart";
import Quiz from "./components/quiz";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [userName, setUserName] = useState("");

  const handleStartQuiz = (name) => {
    setUserName(name);
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setUserName("");
  };

  return (
    <>
      {!quizStarted ? (
        <QuizStart onStart={handleStartQuiz} />
      ) : (
        <Quiz onRestart={handleRestartQuiz} userName={userName} />
      )}
    </>
  );
};

export default App;