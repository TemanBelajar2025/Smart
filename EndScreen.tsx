
import React from 'react';

interface EndScreenProps {
  isWin: boolean;
  score: number;
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ isWin, score, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        {isWin ? '🎉 Selamat! 🎉' : 'Game Over'}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-2">
        {isWin ? 'Kamu berhasil menyelesaikan semua level!' : 'Sayang sekali, coba lagi ya!'}
      </p>
      <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Skor Akhir: {score}
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        {isWin ? 'Main Lagi' : 'Coba Lagi'}
      </button>
    </div>
  );
};

export default EndScreen;
