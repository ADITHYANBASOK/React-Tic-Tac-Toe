interface ScoreBoardProps {
  scoreX: number;
  scoreO: number;
  onClearScores: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scoreX, scoreO, onClearScores }) => {
  return (
    <div className="bg-board-bg rounded-xl p-4 mb-6 w-full max-w-sm">
      <div className="text-2xl font-bold text-center mb-4">Score Board</div>
      <div className="flex justify-around items-center mb-4">
        <div className="text-center">
          <div className="text-primary text-xl font-bold mb-1">Player X</div>
          <div className="text-3xl font-bold">{scoreX}</div>
        </div>
        <div className="text-2xl font-bold text-gray-400">vs</div>
        <div className="text-center">
          <div className="text-red-400 text-xl font-bold mb-1">Player O</div>
          <div className="text-3xl font-bold">{scoreO}</div>
        </div>
      </div>
      <button
        onClick={onClearScores}
        className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
      >
        Clear Scores
      </button>
    </div>
  );
}

export default ScoreBoard;