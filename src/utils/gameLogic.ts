type WinningCombination = [number, number, number];

const WINNING_COMBINATIONS: WinningCombination[] = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

export const calculateWinner = (squares: (string | null)[]): {
  winner: string | null;
  winningLine: number[] | null;
} => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: [a, b, c],
      };
    }
  }
  return {
    winner: null,
    winningLine: null,
  };
};

export const isBoardFull = (squares: (string | null)[]): boolean => {
  return squares.every((square) => square !== null);
};