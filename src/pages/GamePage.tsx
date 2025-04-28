import { FC, useEffect, useState } from 'react';
import { GameBoardType, GameBlockType, GameCellType } from '../types';
import { GameBoard } from '../components/GameBoard';
import { GameBlock } from '../components/GameBlock';
import { GAME_BOARD_SIZE, blocks } from '../constants';
import Footer from '../components/Footer';

const getEmptyBoard = (): GameBoardType => {
  return Array.from({ length: GAME_BOARD_SIZE }, () =>
    Array.from(
      { length: GAME_BOARD_SIZE },
      () => null as unknown as GameCellType
    )
  );
};

const getRandomBlocks = (count: number): GameBlockType[] => {
  const shuffled = [...blocks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GamePage: FC = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>(getEmptyBoard());
  const [randomBlocks, setRandomBlocks] = useState<GameBlockType[]>([]);

  useEffect(() => {
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
