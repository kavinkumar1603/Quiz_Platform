import { useState } from "react";

const QuizStart = ({ onStart }) => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [name, setName] = useState("");

  const handleStartClick = () => {
    setShowNameModal(true);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex justify-center items-center p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-4xl text-center relative z-10">
        
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 mb-4 tracking-tight">
            QUIZ TIME
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Subtitle with gradient */}
        <p className="text-2xl text-slate-600 font-medium mb-12">
          Challenge Yourself, Learn & Grow
        </p>

        {/* Quote Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 shadow-lg">
            <svg className="w-10 h-10 text-blue-600 mx-auto mb-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-lg text-slate-600 italic leading-relaxed mb-2">
              Knowledge is power. The more you learn, the more you grow.
            </p>
            <p className="text-slate-400 text-sm">Test yourself and discover your potential</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStartClick}
          className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2">
            START QUIZ
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

      </div>

      {/* Name Input Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all scale-100 animate-fadeIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Enter Your Name</h3>
              <p className="text-slate-500">Let's personalize your quiz experience!</p>
            </div>
            
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name here..."
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-800 font-medium mb-6 transition-all"
                autoFocus
                required
              />
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowNameModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default QuizStart;

