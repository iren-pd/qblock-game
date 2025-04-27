import { FC, useEffect, useState } from 'react';
import { GameBoardType } from '../types';
import { GameBoard } from '../components/GameBoard';
import { GAME_BOARD_SIZE, blocks } from '../constants';
import Footer from '../components/Footer';

const getDemoBoard = (): GameBoardType => {
  const board: GameBoardType = Array.from({ length: GAME_BOARD_SIZE }, () =>
    Array.from({ length: GAME_BOARD_SIZE }, () => null)
  );

  // Каждой фигуре присваиваем уникальный number
  const demoBlocks = [
    { block: blocks.find((b) => b.name === 'horizontal-line3'), key: 1 }, // линия
    { block: blocks.find((b) => b.name === 'square-little'), key: 2 }, // квадрат
    {
      block: blocks.find((b) =>
        b.name?.startsWith('l-shape-vertical-right-down')
      ),
      key: 3,
    }, // L
    { block: blocks.find((b) => b.name?.startsWith('t-shape-down')), key: 4 }, // T
    {
      block: blocks.find((b) => b.name?.startsWith('z-shape-vertical-right')),
      key: 5,
    }, // Z
    {
      block: blocks.find((b) => b.name?.startsWith('v-shape-up-right')),
      key: 6,
    }, // V
  ];

  // Координаты для размещения фигур
  const positions = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 0, y: 4 },
    { x: 4, y: 4 },
    { x: 7, y: 0 },
    { x: 7, y: 4 },
  ];

  demoBlocks.forEach((item, i) => {
    const block = item.block;
    if (!block) return;
    const pos = positions[i];
    block.cells.forEach((cell) => {
      const x = pos.x + cell.x;
      const y = pos.y + cell.y;
      if (x < GAME_BOARD_SIZE && y < GAME_BOARD_SIZE) {
        board[y][x] = item.key;
      }
    });
  });

  return board;
};

const GamePage: FC = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>([]);

  useEffect(() => {
    setGameBoard(getDemoBoard());
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <GameBoard board={gameBoard} />
      </main>

      <Footer />
    </>
  );
};

export default GamePage;
