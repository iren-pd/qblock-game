export type GameCellType = number | null;
export type GameRowType = GameCellType[];
export type GameBoardType = GameRowType[];

export type GameBlockType = {
  name: string;
  color: string;
  cells: { x: number; y: number }[];
};
