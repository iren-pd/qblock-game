import { FC } from 'react';
import { GameBlockType } from '../types';

export const GameBlock: FC<{ block: GameBlockType }> = ({ block }) => {
  const shape = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));

  block.cells.forEach((cell) => {
    if (cell.x < 3 && cell.y < 3) {
      shape[cell.y][cell.x] = 1;
    }
  });

  return (
    <div className="w-[100px] h-[100px] grid grid-cols-3 grid-rows-3 gap-0.5 ">
      {shape.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          console.log('cell', !!cell ? block.color : 'bg-transparent')
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-full h-full ${!!cell ? block.color : 'bg-transparent'}`}
            />
          )
        })
      )}
    </div>
  );
};
