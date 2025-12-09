const QuizStart = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white p-12 rounded-xl shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-lg mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl text-slate-800 font-bold mb-3">JavaScript Quiz</h1>
          <p className="text-slate-600 text-lg">Test your knowledge and master JavaScript concepts</p>
        </div>

        {/* Quiz Information Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">10</div>
            <div className="text-sm text-slate-600">Questions</div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">10s</div>
            <div className="text-sm text-slate-600">Per Question</div>
          </div>
          <div className="bg-violet-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-violet-600 mb-1">100%</div>
            <div className="text-sm text-slate-600">Best Score</div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-slate-50 rounded-lg p-6 mb-8">
          <h2 className="text-slate-800 font-semibold text-lg mb-4">What to Expect</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Multiple Choice Questions</p>
                <p className="text-slate-500 text-sm">Choose the best answer from four options</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Timed Challenge</p>
                <p className="text-slate-500 text-sm">10 seconds to answer each question</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Instant Feedback</p>
                <p className="text-slate-500 text-sm">See correct answers immediately after selection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Quiz
        </button>

        <p className="text-center text-slate-500 text-sm mt-6">Ready to test your skills? Good luck! 🚀</p>
      </div>
    </div>
  );
};

export default QuizStart;
