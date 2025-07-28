
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Math Whiz
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Uji kemampuan komposisi fungsimu!
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Mulai Petualangan!
      </button>
    </div>
  );
};

export default StartScreen;
