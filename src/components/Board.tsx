import Square from './Square';

interface BoardProps {
  squares: (string | null)[];
  winningLine: number[] | null;
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, winningLine, onClick }) => {
  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
      isWinner={winningLine?.includes(i) || false}
      position={i}
    />
  );

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-board-bg rounded-xl">
      {Array(9)
        .fill(null)
        .map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;