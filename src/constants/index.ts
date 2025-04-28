import { GameBlockType } from "../types";

export const GAME_BOARD_SIZE = 10;

const blocksLines: GameBlockType[] = [
  {
    name: 'horizontal-line2',
    color: 'bg-yellow-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
  },
  {
    name: 'vertical-line2',
    color: 'bg-yellow-500',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ],
  },
  {
    name: 'horizontal-line3',
    color: 'bg-yellow-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
  {
    name: 'vertical-line3',
    color: 'bg-yellow-500',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
    ],
  },
  {
    name: 'horizontal-line4',
    color: 'bg-yellow-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ],
  },
  {
    name: 'vertical-line4',
    color: 'bg-yellow-500',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
  },
];

const blocksSquares: GameBlockType[] = [
  {
    name: 'square-sm',
    color: 'bg-red-400',
    cells: [{ x: 0, y: 0 }],
  },
  {
    name: 'square-md',
    color: 'bg-red-500',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
  },
  {
    name: 'square-lg',
    color: 'bg-red-600',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ],
  },
];

const blocksLShapesVertical: GameBlockType[] = [
  {
    name: 'l-shape-vertical-right-down',
    color: 'bg-green-400',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
  },
  {
    name: 'l-shape-vertical-right-up',
    color: 'bg-green-500',
    cells: [
      { x: 1, y: 2 },
      { x: 0, y: 2 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
    ],
  },
  {
    name: 'l-shape-vertical-left-down',
    color: 'bg-green-600',
    cells: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
    ],
  },
  {
    name: 'l-shape-vertical-left-up',
    color: 'bg-green-700',
    cells: [
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
  },
];

const blocksLShapesHorizontal: GameBlockType[] = [
  {
    name: 'l-shape-horizontal-down-right',
    color: 'bg-blue-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
    ],
  },
  {
    name: 'l-shape-horizontal-up-right',
    color: 'bg-blue-500',
    cells: [
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ],
  },
  {
    name: 'l-shape-horizontal-down-left',
    color: 'bg-blue-600',
    cells: [
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
  {
    name: 'l-shape-horizontal-up-left',
    color: 'bg-blue-700',
    cells: [
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
];

const blocksTShapes: GameBlockType[] = [
  {
    name: 't-shape-down',
    color: 'bg-purple-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 1 },
    ],
  },
  {
    name: 't-shape-up',
    color: 'bg-purple-500',
    cells: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 0 },
    ],
  },
  {
    name: 't-shape-left',
    color: 'bg-purple-600',
    cells: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 1 },
    ],
  },
  {
    name: 't-shape-right',
    color: 'bg-purple-700',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
  },
];

const blocksZShapes: GameBlockType[] = [
  {
    name: 'z-shape-vertical-right',
    color: 'bg-pink-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
  },
  {
    name: 'z-shape-vertical-left',
    color: 'bg-pink-500',
    cells: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
  {
    name: 'z-shape-horizontal-right',
    color: 'bg-pink-600',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
  },
  {
    name: 'z-shape-horizontal-left',
    color: 'bg-pink-700',
    cells: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
  },
];

const blocksVShapes: GameBlockType[] = [
  {
    name: 'v-shape-down-left',
    color: 'bg-orange-400',
    cells: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
  },
  {
    name: 'v-shape-up-right',
    color: 'bg-orange-500',
    cells: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
  },
  {
    name: 'v-shape-down-right',
    color: 'bg-orange-600',
    cells: [
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
  },
  {
    name: 'v-shape-up-left',
    color: 'bg-orange-700',
    cells: [
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
  },
];

export const blocks: GameBlockType[] = [
  ...blocksLines,
  ...blocksSquares,
  ...blocksLShapesVertical,
  ...blocksLShapesHorizontal,
  ...blocksTShapes,
  ...blocksZShapes,
  ...blocksVShapes,
];
