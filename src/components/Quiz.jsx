import { useState, useEffect } from "react";

const Quiz = ({ onRestart, userName }) => {
  const questions = [
    {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      correct: 2,
    },
    {
      question: "Which method logs to the console?",
      options: ["print()", "log()", "console()", "console.log()"],
      correct: 3,
    },
    {
      question: "Which is NOT a JavaScript data type?",
      options: ["number", "string", "boolean", "character"],
      correct: 3,
    },
    {
      question: "What does === check in JavaScript?",
      options: ["Only value", "Only type", "Value and type", "None"],
      correct: 2,
    },
    {
      question: "What is the output of typeof [] ?",
      options: ["array", "object", "list", "undefined"],
      correct: 1,
    },
    {
      question: "Which loop is used to repeat a block of code?",
      options: ["repeat", "loop", "for", "if"],
      correct: 2,
    },
    {
      question: "Which method converts JSON string to a JavaScript object?",
      options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "objectify()"],
      correct: 1,
    },
    {
      question: "What is NaN in JavaScript?",
      options: ["Not a Name", "No action Needed", "Not a Number", "Negative Number"],
      correct: 2,
    },
    {
      question: "What does the push() method do?",
      options: ["Adds element at end", "Adds element at start", "Removes last element", "Sorts array"],
      correct: 0,
    },
    {
      question: "Which keyword is used to create a function in JavaScript?",
      options: ["function", "func", "def", "method"],
      correct: 0,
    }
  ];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(10);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Reset timer when question changes
  useEffect(() => {
    setTimer(10);
  }, [index]);

  // Timer effect
  useEffect(() => {
    if (showResult || answered) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [index, answered, showResult]);

  const handleTimeUp = () => {
    setAnswered(true);

    setScore((prevScore) => {
      if (selected !== null && selected === questions[index].correct) {
        return prevScore + 1;
      }
      return prevScore;
    });

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(index + 1);
        setSelected(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
  };

  const handleNext = () => {
    if (selected === null) {
      setShowErrorModal(true);
      return;
    }

    setAnswered(true);

    if (selected === questions[index].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(index + 1);
        setSelected(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleQuit = () => {
    setShowQuitModal(true);
  };

  const confirmQuit = () => {
    setShowQuitModal(false);
    if (onRestart) {
      onRestart();
    }
  };

  const cancelQuit = () => {
    setShowQuitModal(false);
  };

  const restart = () => {
    if (onRestart) {
      onRestart();
    } else {
      setIndex(0);
      setSelected(null);
      setScore(0);
      setShowResult(false);
      setAnswered(false);
      setTimer(10);
    }
  };

  const getButtonClass = (i) => {
    if (!answered) {
      return selected === i
        ? "bg-blue-100 text-blue-700 border-2 border-blue-500 shadow-md"
        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm";
    }
    if (i === questions[index].correct) {
      return "bg-emerald-100 text-emerald-800 border-2 border-emerald-500 shadow-md";
    }
    if (i === selected) {
      return "bg-red-100 text-red-800 border-2 border-red-500 shadow-md";
    }
    return "bg-slate-50 text-slate-400 border border-slate-200 opacity-60";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl relative">

        {!showResult ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-200">
              <div>
                <h1 className="text-2xl text-slate-800 font-bold">JavaScript Quiz</h1>
                <p className="text-slate-500 text-sm mt-1">
                  Question {index + 1} of {questions.length}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timer <= 3 ? "bg-red-100" : "bg-blue-100"}`}>
                  <svg className={`w-5 h-5 ${timer <= 3 ? "text-red-600" : "text-blue-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`font-bold text-lg ${timer <= 3 ? "text-red-600" : "text-blue-600"}`}>{timer}s</span>
                </div>
                <button
                  onClick={handleQuit}
                  className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition-all"
                  title="Quit Quiz"
                >
                  ✕ Quit
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((index + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <p className="text-slate-800 text-lg leading-relaxed font-semibold">
                {questions[index].question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {questions[index].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={`w-full text-left px-5 py-4 rounded-lg font-medium transition-all duration-200 ${getButtonClass(i)}`}
                >
                  <span className="font-semibold mr-3">{String.fromCharCode(65 + i)}.</span> {opt}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={answered}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                answered
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {index === questions.length - 1 ? "Finish Quiz" : "Next Question →"}
            </button>
          </>
        ) : (
          /* Result Screen */
          <div className="text-center py-10">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-lg mb-4 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h2 className="text-slate-800 text-3xl font-bold mb-2">
              {userName ? `Great Job, ${userName}!` : "Quiz Completed!"}
            </h2>
            <p className="text-slate-600 text-base mb-8">
              {score === questions.length
                ? "Perfect score! Outstanding performance!"
                : score >= 7
                ? "Great job! Well done!"
                : score >= 5
                ? "Good effort! Keep practicing!"
                : "Keep learning and try again!"}
            </p>

            {/* Score Card */}
            <div className="bg-slate-50 p-8 rounded-lg mb-8">
              <p className="text-slate-600 text-sm font-medium mb-3">
                {userName ? `${userName}'s Final Score` : "Final Score"}
              </p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <p className="text-blue-600 text-5xl font-bold">{score}</p>
                <p className="text-slate-400 text-3xl font-medium">/ {questions.length}</p>
              </div>

              {/* Percentage Bar */}
              <div className="mt-6">
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(score / questions.length) * 100}%` }}
                  />
                </div>
                <p className="text-slate-700 text-2xl font-bold mt-4">
                  {Math.round((score / questions.length) * 100)}%
                </p>
              </div>
            </div>

            {/* Restart Button */}
            <button
              onClick={restart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all"
            >
              Take Quiz Again
            </button>
          </div>
        )}

        {/* Quit Confirmation Modal */}
        {showQuitModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Quit Quiz?</h3>
              </div>
              <p className="text-slate-600 mb-6">Are you sure you want to quit? Your progress will be lost.</p>
              <div className="flex gap-3">
                <button
                  onClick={cancelQuit}
                  className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmQuit}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
                >
                  Quit Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Select an Answer</h3>
              </div>
              <p className="text-slate-600 mb-6">Please select an answer before proceeding to the next question.</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Quiz;