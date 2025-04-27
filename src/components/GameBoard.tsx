import { FC } from 'react';
import { GameBoardType, GameCellType, GameRowType } from '../types';

// Цвета для разных фигур
const cellColors: Record<number, string> = {
  1: 'bg-purple-500', // линия
  2: 'bg-yellow-400', // квадрат
  3: 'bg-green-500', // L
  4: 'bg-blue-500', // T
  5: 'bg-pink-500', // Z
  6: 'bg-red-500', // V
};

export const GameBoard: FC<{ board: GameBoardType }> = ({ board }) => {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] aspect-square bg-white border-2 border-purple-500 shadow-lg grid grid-cols-10 grid-rows-10">
      {board.map((row: GameRowType, rowIndex: number) =>
        row.map((cell: GameCellType, colIndex: number) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-full h-full border border-purple-200 flex items-center justify-center ${
              cell ? cellColors[cell] : 'bg-white'
            }`}
          >
            {cell ? cell : ''}
          </div>
        ))
      )}
    </div>
  );
};
