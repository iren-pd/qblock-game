import { FC } from "react";
import { GameBoardType, GameCellType, GameRowType } from "../types";

export const GameBoard: FC<{ board: GameBoardType }> = ({ board }) => {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] aspect-square bg-white border-2 border-purple-500 shadow-lg grid grid-cols-10 grid-rows-10">
    {board.map((row: GameRowType, rowIndex: number) =>
      row.map((cell: GameCellType, colIndex: number) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className={`${cell !== null ? 'bg-purple-400' : 'bg-white'} w-full h-full border border-purple-200 flex items-center justify-center`}
        >
          
        </div>
      ))
    )}
  </div>
  );
};

