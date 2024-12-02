interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinner: boolean;
  position: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinner, position }) => {
  return (
    <button
      className={`
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
        bg-square-bg rounded-lg
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
        flex items-center justify-center
        transition-all duration-200
        disabled:opacity-80 disabled:cursor-not-allowed
        hover:bg-square-hover hover:scale-105
        ${value === 'X' ? 'text-primary' : 'text-red-400'}
        ${isWinner ? 'bg-winner text-white' : ''}
      `}
      onClick={onClick}
      disabled={value !== null}
      data-position={position}
    >
      {value}
    </button>
  );
};

export default Square;