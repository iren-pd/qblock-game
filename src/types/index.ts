export type GameCellType = {
  number: number | null;
  color: string;
};
export type GameRowType = GameCellType[];
export type GameBoardType = GameRowType[];

export type GameBlockType = {
  name: string;
  color: string;
  cells: { x: number; y: number }[];
};
