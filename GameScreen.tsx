import React from 'react';
import { Question } from '../types';

interface GameScreenProps {
  level: number;
  score: number;
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  onContinue: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
  level,
  score,
  question,
  onAnswer,
  selectedAnswer,
  isCorrect,
  onContinue,
}) => {
  const getButtonClass = (option: string) => {
    if (selectedAnswer === null) {
      return 'bg-gray-700 hover:bg-purple-600';
    }
    if (option === selectedAnswer) {
      return isCorrect ? 'bg-green-500' : 'bg-red-500';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-500';
    }
    return 'bg-gray-600 opacity-50';
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-400">Level {level}</h2>
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400">Skor: {score}</h2>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-2xl mb-8 flex-grow flex items-center justify-center">
        <div className="text-center">
            <p className="text-lg md:text-xl font-semibold text-gray-300 mb-2">Pertanyaan:</p>
            <p className="text-xl md:text-2xl text-white">{question.questionText}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && (
        <div className="mt-auto pt-6 text-center">
          <button
            onClick={onContinue}
            className="px-10 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse"
          >
            Lanjutkan
          </button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;