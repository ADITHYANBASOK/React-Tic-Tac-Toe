import { useState, useCallback, useEffect } from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import { calculateWinner, isBoardFull } from './utils/gameLogic';
import { getStoredScores, updateScore, clearScores } from './utils/scoreManager';

function App() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState(getStoredScores());
  
  const { winner, winningLine } = calculateWinner(squares);
  const isDraw = !winner && isBoardFull(squares);

  useEffect(() => {
    if (winner) {
      updateScore(winner);
      setScores(getStoredScores());
    }
  }, [winner]);

  const handleClick = useCallback((i: number) => {
    if (winner || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }, [squares, xIsNext, winner]);

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  const handleClearScores = useCallback(() => {
    clearScores();
    setScores(getStoredScores());
  }, []);

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (isDraw) {
      return 'Game ended in a draw!';
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="min-h-screen bg-game-bg text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-4 sm:mb-6 md:mb-8">
          Tic Tac Toe
        </h1>
        <div className="flex justify-center">

        <ScoreBoard
          scoreX={scores.scoreX}
          scoreO={scores.scoreO}
          onClearScores={handleClearScores}
        />
        </div>

        <div className="text-xl sm:text-2xl text-gray-300 text-center mb-6 sm:mb-8">
          {getStatus()}
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <Board
            squares={squares}
            winningLine={winningLine}
            onClick={handleClick}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={resetGame}
            className="
              px-6 py-3 text-lg sm:text-xl
              bg-primary hover:bg-primary-hover
              text-white font-semibold rounded-lg
              transition-colors duration-200
              shadow-lg hover:shadow-xl
            "
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;