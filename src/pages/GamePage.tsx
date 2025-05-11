import { FC, useEffect, useState } from 'react';
import { GameBoardType, GameBlockType } from '../types';
import { GameBoard } from '../components/GameBoard';
import { GameBlock } from '../components/GameBlock';
import Footer from '../components/Footer';
import { GameHeader } from '../components/GameHeader';
import { getRandomBlocks, getEmptyBoard } from '../utils';

const GamePage: FC = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>(getEmptyBoard());
  const [randomBlocks, setRandomBlocks] = useState<GameBlockType[]>([]);

  useEffect(() => {
    setRandomBlocks(getRandomBlocks(3));
  }, []);

  return (
    <>
      <GameHeader />

      <main className="flex flex-col items-center justify-center gap-14 h-screen bg-purple-100">
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
