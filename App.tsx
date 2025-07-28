import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Question } from './types';
import { quizLevels } from './services/questionData';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

/**
 * Shuffles an array in place using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 * @param array The array to shuffle.
 * @returns The shuffled array.
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [backupQuestionIndex, setBackupQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const loadQuestion = useCallback(() => {
    const levelData = quizLevels[currentLevelIndex];
    if (levelData) {
      const questionData = backupQuestionIndex === -1
        ? levelData.mainQuestion
        : levelData.backupQuestions[backupQuestionIndex];
      
      setCurrentQuestion({
        ...questionData,
        options: shuffleArray(questionData.options),
      });
    }
  }, [currentLevelIndex, backupQuestionIndex]);

  useEffect(() => {
    if (gameState === 'playing') {
      loadQuestion();
    }
  }, [gameState, loadQuestion]);

  const resetGame = () => {
    setGameState('start');
    setCurrentLevelIndex(0);
    setBackupQuestionIndex(-1);
    setScore(0);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };
  
  const handleStart = () => {
    setGameState('playing');
  };

  const proceedToNextStage = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    
    if (isCorrect) {
      const nextLevelIndex = currentLevelIndex + 1;
      if (nextLevelIndex >= quizLevels.length) {
        setGameState('game-won');
      } else {
        setCurrentLevelIndex(nextLevelIndex);
        setBackupQuestionIndex(-1);
        setGameState('playing');
      }
    } else {
      const nextBackupIndex = backupQuestionIndex + 1;
      if (nextBackupIndex >= quizLevels[currentLevelIndex].backupQuestions.length) {
        setGameState('game-over');
      } else {
        setBackupQuestionIndex(nextBackupIndex);
        setGameState('playing');
      }
    }
  };

  const handleAnswer = (answer: string) => {
    if (currentQuestion) {
      const correct = answer === currentQuestion.correctAnswer;
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      setGameState('feedback');
      
      if (correct) {
        setScore(prevScore => prevScore + (10 * (currentLevelIndex + 1)));
      }
    }
  };

  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'playing':
      case 'feedback':
        if (currentQuestion) {
          return (
            <GameScreen
              level={quizLevels[currentLevelIndex].level}
              score={score}
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              isCorrect={isCorrect}
              onContinue={proceedToNextStage}
            />
          );
        }
        return null;
      case 'game-over':
        return <EndScreen isWin={false} score={score} onRestart={resetGame} />;
      case 'game-won':
        return <EndScreen isWin={true} score={score} onRestart={resetGame} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 flex items-center justify-center p-4">
      <main className="w-full max-w-4xl h-[90vh] max-h-[700px] bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
