import { GameBlockType } from '../types';
import { blocks } from '../constants';

export const getRandomBlocks = (count: number): GameBlockType[] => {
  const shuffled = [...blocks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
