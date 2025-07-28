
import { Level } from '../types';

export const quizLevels: Level[] = [
  // Level 1: (f o g)(x), f(x) dan g(x) linear
  {
    level: 1,
    mainQuestion: {
      questionText: 'Jika f(x) = x + 3 dan g(x) = 2x, maka (f o g)(x) = ...',
      options: ['2x + 3', '2x + 6', 'x + 5', '2x^2 + 3'],
      correctAnswer: '2x + 3',
    },
    backupQuestions: [
      { questionText: 'Jika f(x) = x + 2 dan g(x) = 3x, maka (f o g)(x) = ...', options: ['3x + 2', '3x + 6', 'x + 5', '3x^2'], correctAnswer: '3x + 2' },
      { questionText: 'Jika f(x) = x - 1 dan g(x) = 4x, maka (f o g)(x) = ...', options: ['4x - 4', '4x - 1', 'x + 3', '4x'], correctAnswer: '4x - 1' },
      { questionText: 'Jika f(x) = x + 5 dan g(x) = x - 2, maka (f o g)(x) = ...', options: ['x + 7', 'x - 7', 'x + 3', 'x^2 + 3x - 10'], correctAnswer: 'x + 3' },
      { questionText: 'Jika f(x) = 2x dan g(x) = x + 1, maka (f o g)(x) = ...', options: ['2x + 1', '2x + 2', '2x^2 + 2', '3x'], correctAnswer: '2x + 2' },
      { questionText: 'Jika f(x) = 3x - 2 dan g(x) = x + 1, maka (f o g)(x) = ...', options: ['3x - 1', '3x + 1', '3x + 3', '3x - 2'], correctAnswer: '3x + 1' },
    ]
  },
  // Level 2: (g o f)(x), f(x) dan g(x) linear
  {
    level: 2,
    mainQuestion: {
      questionText: 'Jika f(x) = x - 5 dan g(x) = 3x + 1, maka (g o f)(x) = ...',
      options: ['3x - 14', '3x - 4', '3x - 15', 'x - 14'],
      correctAnswer: '3x - 14',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = x + 1 dan g(x) = 2x - 3, maka (g o f)(x) = ...', options: ['2x - 1', '2x - 2', '2x + 1', 'x - 2'], correctAnswer: '2x - 1' },
        { questionText: 'Jika f(x) = 2x dan g(x) = x + 4, maka (g o f)(x) = ...', options: ['2x + 4', '2x + 8', '3x + 4', '2x'], correctAnswer: '2x + 4' },
        { questionText: 'Jika f(x) = x - 2 dan g(x) = 5x, maka (g o f)(x) = ...', options: ['5x - 2', '5x - 10', '5x', 'x - 10'], correctAnswer: '5x - 10' },
        { questionText: 'Jika f(x) = 3x + 2 dan g(x) = x - 1, maka (g o f)(x) = ...', options: ['3x + 1', '3x + 2', '3x - 1', '2x + 1'], correctAnswer: '3x + 1' },
        { questionText: 'Jika f(x) = 2x - 1 dan g(x) = 4x + 3, maka (g o f)(x) = ...', options: ['8x - 1', '8x + 2', '8x + 7', '8x - 4'], correctAnswer: '8x - 1' },
    ]
  },
  // Level 3: (f o g)(x), f linear, g kuadrat
  {
    level: 3,
    mainQuestion: {
      questionText: 'Jika f(x) = x + 2 dan g(x) = x² - 1, maka (f o g)(x) = ...',
      options: ['x² + 1', 'x² + 3', '(x+2)² - 1', 'x² - 2'],
      correctAnswer: 'x² + 1',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = 2x dan g(x) = x² + 3, maka (f o g)(x) = ...', options: ['2x² + 6', '4x² + 3', '2x² + 3', 'x² + 6'], correctAnswer: '2x² + 6' },
        { questionText: 'Jika f(x) = x - 4 dan g(x) = x², maka (f o g)(x) = ...', options: ['x² - 4', '(x-4)²', 'x² - 16', 'x² + 4'], correctAnswer: 'x² - 4' },
        { questionText: 'Jika f(x) = 3x + 1 dan g(x) = x² - x, maka (f o g)(x) = ...', options: ['3x² - 3x + 1', '3x² - x + 1', '9x² - 3x', '3x² - 3x'], correctAnswer: '3x² - 3x + 1' },
        { questionText: 'Jika f(x) = x + 1 dan g(x) = 2x² + 5, maka (f o g)(x) = ...', options: ['2x² + 6', '2(x+1)² + 5', '2x² + 5x + 1', '2x² + 4'], correctAnswer: '2x² + 6' },
        { questionText: 'Jika f(x) = 5x dan g(x) = x² - 2, maka (f o g)(x) = ...', options: ['5x² - 10', '25x² - 2', '5x² - 2', '5x³ - 10x'], correctAnswer: '5x² - 10' },
    ]
  },
  // Level 4: (g o f)(x), f linear, g kuadrat
  {
    level: 4,
    mainQuestion: {
      questionText: 'Jika f(x) = x + 2 dan g(x) = x², maka (g o f)(x) = ...',
      options: ['x² + 4x + 4', 'x² + 2', 'x² + 4', '2x²'],
      correctAnswer: 'x² + 4x + 4',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = x - 1 dan g(x) = x² + 3, maka (g o f)(x) = ...', options: ['x² - 2x + 4', 'x² + 2', 'x² - 2x + 2', 'x² - 1'], correctAnswer: 'x² - 2x + 4' },
        { questionText: 'Jika f(x) = 2x dan g(x) = x² - 1, maka (g o f)(x) = ...', options: ['4x² - 1', '2x² - 1', '4x² - 2', '2x² - 2'], correctAnswer: '4x² - 1' },
        { questionText: 'Jika f(x) = 3x + 1 dan g(x) = x², maka (g o f)(x) = ...', options: ['9x² + 6x + 1', '3x² + 1', '9x² + 1', '3x²'], correctAnswer: '9x² + 6x + 1' },
        { questionText: 'Jika f(x) = x - 3 dan g(x) = 2x² - x, maka (g o f)(x) = ...', options: ['2x² - 13x + 21', '2x² - 7x + 9', '2x² - 12x + 18', '2x² - x - 3'], correctAnswer: '2x² - 13x + 21' },
        { questionText: 'Jika f(x) = 2x + 1 dan g(x) = x² + x + 1, maka (g o f)(x) = ...', options: ['4x² + 6x + 3', '4x² + 4x + 1', '2x² + 2x + 3', '4x² + 5x + 2'], correctAnswer: '4x² + 6x + 3' },
    ]
  },
  // Level 5: Menghitung nilai (f o g)(a)
  {
    level: 5,
    mainQuestion: {
      questionText: 'Jika f(x) = 3x - 1 dan g(x) = 2x² + 2, nilai dari (f o g)(1) adalah ...',
      options: ['11', '10', '8', '12'],
      correctAnswer: '11',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = x + 5 dan g(x) = x², nilai dari (f o g)(3) adalah ...', options: ['14', '9', '8', '11'], correctAnswer: '14' },
        { questionText: 'Jika f(x) = 2x + 1 dan g(x) = 3x - 4, nilai dari (g o f)(2) adalah ...', options: ['11', '5', '10', '15'], correctAnswer: '11' },
        { questionText: 'Jika f(x) = x² - 1 dan g(x) = x + 1, nilai dari (f o g)(-1) adalah ...', options: ['-1', '0', '1', '2'], correctAnswer: '-1' },
        { questionText: 'Jika f(x) = 5x dan g(x) = x² - x, nilai dari (g o f)(1) adalah ...', options: ['20', '25', '15', '30'], correctAnswer: '20' },
        { questionText: 'Jika f(x) = 10 - x dan g(x) = 2x + 1, nilai dari (f o g)(4) adalah ...', options: ['1', '9', '2', '-1'], correctAnswer: '1' },
    ]
  },
  // Level 6: Komposisi dengan fungsi pecahan
  {
    level: 6,
    mainQuestion: {
      questionText: 'Jika f(x) = 1/x dan g(x) = x + 3, maka (f o g)(x) = ...',
      options: ['1/(x+3)', '1/x + 3', '(x+3)/x', 'x/(x+3)'],
      correctAnswer: '1/(x+3)',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = x - 2 dan g(x) = 1/(x-1), maka (g o f)(x) = ...', options: ['1/(x-3)', '1/(x-2)', '1/x - 1/2', '-1/x'], correctAnswer: '1/(x-3)' },
        { questionText: 'Jika f(x) = 2/x dan g(x) = 3x, maka (f o g)(x) = ...', options: ['2/(3x)', '6/x', '3/(2x)', 'x/6'], correctAnswer: '2/(3x)' },
        { questionText: 'Jika f(x) = (x+1)/x dan g(x) = x - 1, maka (f o g)(x) = ...', options: ['x/(x-1)', '(x-1)/x', '1', 'x'], correctAnswer: 'x/(x-1)' },
        { questionText: 'Jika f(x) = 1/x dan g(x) = 1/x, maka (f o g)(x) = ...', options: ['x', '1', '1/x²', '2/x'], correctAnswer: 'x' },
        { questionText: 'Jika f(x) = x/(x+1) dan g(x) = 2x, maka (g o f)(x) = ...', options: ['2x/(x+1)', 'x/(2x+1)', '2x/(2x+1)', '2x²+2x'], correctAnswer: '2x/(x+1)' },
    ]
  },
  // Level 7: Menentukan f(x) jika g(x) dan (f o g)(x) diketahui
  {
    level: 7,
    mainQuestion: {
      questionText: 'Jika g(x) = x - 1 dan (f o g)(x) = 2x + 4, maka f(x) = ...',
      options: ['2x + 6', '2x + 2', '2x + 5', 'x + 6'],
      correctAnswer: '2x + 6',
    },
    backupQuestions: [
        { questionText: 'Jika g(x) = x + 3 dan (f o g)(x) = 3x + 10, maka f(x) = ...', options: ['3x + 1', '3x + 19', 'x + 7', '3x - 1'], correctAnswer: '3x + 1' },
        { questionText: 'Jika g(x) = 2x dan (f o g)(x) = 4x - 1, maka f(x) = ...', options: ['2x - 1', 'x - 1', '8x - 1', '2x + 1'], correctAnswer: '2x - 1' },
        { questionText: 'Jika g(x) = x - 5 dan (f o g)(x) = x² - 10x + 25, maka f(x) = ...', options: ['x²', '(x-5)²', 'x² + 5', 'x² - 5'], correctAnswer: 'x²' },
        { questionText: 'Jika g(x) = x + 1 dan (f o g)(x) = x² + 2x + 2, maka f(x) = ...', options: ['x² + 1', 'x² + x', '(x+1)²', 'x² - 1'], correctAnswer: 'x² + 1' },
        { questionText: 'Jika g(x) = x/2 dan (f o g)(x) = x + 4, maka f(x) = ...', options: ['2x + 4', 'x + 2', 'x/2 + 4', '2x + 2'], correctAnswer: '2x + 4' },
    ]
  },
  // Level 8: Menentukan g(x) jika f(x) dan (f o g)(x) diketahui
  {
    level: 8,
    mainQuestion: {
      questionText: 'Jika f(x) = x + 2 dan (f o g)(x) = 3x + 5, maka g(x) = ...',
      options: ['3x + 3', '3x + 7', '3x', 'x + 3'],
      correctAnswer: '3x + 3',
    },
    backupQuestions: [
        { questionText: 'Jika f(x) = 2x - 1 dan (f o g)(x) = 2x + 1, maka g(x) = ...', options: ['x + 1', 'x', '2x', 'x - 1'], correctAnswer: 'x + 1' },
        { questionText: 'Jika f(x) = x² dan (f o g)(x) = x² - 4x + 4, maka g(x) = ...', options: ['x - 2', 'x + 2', 'x²', 'x - 4'], correctAnswer: 'x - 2' },
        { questionText: 'Jika f(x) = 3x dan (f o g)(x) = 6x + 9, maka g(x) = ...', options: ['2x + 3', '3x + 3', '2x', '6x + 6'], correctAnswer: '2x + 3' },
        { questionText: 'Jika f(x) = x - 4 dan (f o g)(x) = x² - 4, maka g(x) = ...', options: ['x²', 'x² + 4', 'x² - 8', 'x + 4'], correctAnswer: 'x²' },
        { questionText: 'Jika f(x) = 1/x dan (f o g)(x) = 1/(x+5), maka g(x) = ...', options: ['x + 5', 'x - 5', '5x', '1/x'], correctAnswer: 'x + 5' },
    ]
  },
  // Level 9: Komposisi tiga fungsi (f o g o h)(x)
  {
    level: 9,
    mainQuestion: {
      questionText: 'Jika f(x)=x+1, g(x)=2x, h(x)=x², maka (f o g o h)(x) = ...',
      options: ['2x² + 1', '2(x+1)²', '(2x+1)²', '2x²+2'],
      correctAnswer: '2x² + 1',
    },
    backupQuestions: [
        { questionText: 'Jika f(x)=x², g(x)=x-1, h(x)=3x, maka (f o g o h)(x) = ...', options: ['(3x-1)²', '3x²-1', '9x²-1', '3(x-1)²'], correctAnswer: '(3x-1)²' },
        { questionText: 'Jika f(x)=2x+3, g(x)=x-1, h(x)=x+1, maka (f o g o h)(x) = ...', options: ['2x + 3', '2x+1', '2x+5', '2x'], correctAnswer: '2x + 3' },
        { questionText: 'Jika f(x)=x-4, g(x)=x², h(x)=x+1, maka (f o g o h)(x) = ...', options: ['(x+1)² - 4', 'x²+2x-3', 'x²-3', 'x²+2x+1-4'], correctAnswer: '(x+1)² - 4' },
        { questionText: 'Jika f(x)=1/x, g(x)=x+2, h(x)=x-2, maka (f o g o h)(x) = ...', options: ['1/x', 'x', '1/(x+4)', '1/(x-4)'], correctAnswer: '1/x' },
        { questionText: 'Jika f(x)=5x, g(x)=2x, h(x)=3x, maka (f o g o h)(x) = ...', options: ['30x', '10x', '15x', '25x'], correctAnswer: '30x' },
    ]
  },
  // Level 10: Menentukan f(x) jika g(x) dan (g o f)(x) diketahui (lebih sulit)
  {
    level: 10,
    mainQuestion: {
      questionText: 'Jika g(x) = x + 3 dan (g o f)(x) = 2x² - x + 4, maka f(x) = ...',
      options: ['2x² - x + 1', '2x² - x + 7', '2x² - x - 1', 'x² - x + 1'],
      correctAnswer: '2x² - x + 1',
    },
    backupQuestions: [
        { questionText: 'Jika g(x) = 2x - 1 dan (g o f)(x) = 2x + 5, maka f(x) = ...', options: ['x + 3', 'x + 2', '2x + 6', 'x + 6'], correctAnswer: 'x + 3' },
        { questionText: 'Jika g(x) = x² dan (g o f)(x) = x² + 6x + 9, maka f(x) = ...', options: ['x + 3', 'x - 3', 'x + 9', 'x² + 3'], correctAnswer: 'x + 3' },
        { questionText: 'Jika g(x) = 3x + 2 dan (g o f)(x) = 3x² - 3x + 8, maka f(x) = ...', options: ['x² - x + 2', 'x² - x + 6', '3x² - 3x + 6', 'x² - x + 10/3'], correctAnswer: 'x² - x + 2' },
        { questionText: 'Jika g(x) = x - 5 dan (g o f)(x) = x/(x+1) - 5, maka f(x) = ...', options: ['x/(x+1)', 'x+1', 'x', '1/(x+1)'], correctAnswer: 'x/(x+1)' },
        { questionText: 'Jika g(x) = 1/(x-1) dan (g o f)(x) = 1/(2x), maka f(x) = ...', options: ['2x + 1', '2x - 1', '1/2x + 1', '2x'], correctAnswer: '2x + 1' },
    ]
  },
];
