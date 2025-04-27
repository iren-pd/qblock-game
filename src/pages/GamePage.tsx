import { FC, useEffect, useState } from 'react';
import { GameBoardType } from '../types';
import { GameBoard } from '../components/GameBoard';
import { GAME_BOARD_SIZE } from '../constants';
import Footer from '../components/Footer';

const GamePage: FC = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>([]);

  useEffect(() => {
    const board = Array.from({ length: GAME_BOARD_SIZE }, () =>
      Array.from({ length: GAME_BOARD_SIZE }, () => null)
    );
    setGameBoard(board);
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
