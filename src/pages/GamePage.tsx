import { FC, useEffect, useState } from 'react';
import { GameBoardType, GameBlockType } from '../types';
import { GameBoard } from '../components/GameBoard';
import { GameBlock } from '../components/GameBlock';
import { GAME_BOARD_SIZE, blocks } from '../constants';
import Footer from '../components/Footer';

const getDemoBoard = (): GameBoardType => {
  const board: GameBoardType = Array.from({ length: GAME_BOARD_SIZE }, () =>
    Array.from({ length: GAME_BOARD_SIZE }, () => null)
  );

  const demoBlocks = [
    { block: blocks.find((b) => b.name === 'horizontal-line3'), key: 1 },
    { block: blocks.find((b) => b.name === 'square-little'), key: 2 },
    {
      block: blocks.find((b) =>
        b.name?.startsWith('l-shape-vertical-right-down')
      ),
      key: 3,
    }, // L
    { block: blocks.find((b) => b.name?.startsWith('t-shape-down')), key: 4 },
    {
      block: blocks.find((b) => b.name?.startsWith('z-shape-vertical-right')),
      key: 5,
    }, // Z
    {
      block: blocks.find((b) => b.name?.startsWith('v-shape-up-right')),
      key: 6,
    }, // V
  ];

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

const getRandomBlocks = (count: number): GameBlockType[] => {
  const shuffled = [...blocks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GamePage: FC = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>([]);
  const [randomBlocks, setRandomBlocks] = useState<GameBlockType[]>([]);

  console.log('randomBlocks', randomBlocks);

  useEffect(() => {
    setGameBoard(getDemoBoard());
    setRandomBlocks(getRandomBlocks(3));
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-14 h-screen">
        <GameBoard board={gameBoard} />

        <div className="flex gap-8">
          {randomBlocks.map((block, index) => (
            <GameBlock key={index} block={block} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GamePage;
