import { GameBoardType, GameCellType } from '../types';
import { GAME_BOARD_SIZE } from '../constants';

export const getEmptyBoard = (): GameBoardType => {
  return Array.from({ length: GAME_BOARD_SIZE }, () =>
    Array.from(
      { length: GAME_BOARD_SIZE },
      () => null as unknown as GameCellType
    )
  );
};