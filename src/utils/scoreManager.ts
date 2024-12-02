// Constants for local storage keys
const SCORE_X_KEY = 'ticTacToe_scoreX';
const SCORE_O_KEY = 'ticTacToe_scoreO';

export const getStoredScores = (): { scoreX: number; scoreO: number } => {
  const scoreX = parseInt(localStorage.getItem(SCORE_X_KEY) || '0', 10);
  const scoreO = parseInt(localStorage.getItem(SCORE_O_KEY) || '0', 10);
  return { scoreX, scoreO };
};

export const updateScore = (winner: string): void => {
  const { scoreX, scoreO } = getStoredScores();
  if (winner === 'X') {
    localStorage.setItem(SCORE_X_KEY, String(scoreX + 1));
  } else if (winner === 'O') {
    localStorage.setItem(SCORE_O_KEY, String(scoreO + 1));
  }
};

export const clearScores = (): void => {
  localStorage.setItem(SCORE_X_KEY, '0');
  localStorage.setItem(SCORE_O_KEY, '0');
};