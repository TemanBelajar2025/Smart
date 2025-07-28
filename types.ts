
export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface Level {
  level: number;
  mainQuestion: Question;
  backupQuestions: Question[];
}

export type GameState = 'start' | 'playing' | 'feedback' | 'game-over' | 'game-won';
