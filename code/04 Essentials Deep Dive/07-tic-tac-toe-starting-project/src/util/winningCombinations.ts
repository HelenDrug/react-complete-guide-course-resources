import type { WinningCombinations } from '../components/types';
export const WINNING_COMBINATIONS: WinningCombinations = [
	[
		{ rowIndex: 0, columnIndex: 0 },
		{ rowIndex: 0, columnIndex: 1 },
		{ rowIndex: 0, columnIndex: 2 },
	],
	[
		{ rowIndex: 1, columnIndex: 0 },
		{ rowIndex: 1, columnIndex: 1 },
		{ rowIndex: 1, columnIndex: 2 },
	],
	[
		{ rowIndex: 2, columnIndex: 0 },
		{ rowIndex: 2, columnIndex: 1 },
		{ rowIndex: 2, columnIndex: 2 },
	],
	[
		{ rowIndex: 0, columnIndex: 0 },
		{ rowIndex: 1, columnIndex: 0 },
		{ rowIndex: 2, columnIndex: 0 },
	],
	[
		{ rowIndex: 0, columnIndex: 1 },
		{ rowIndex: 1, columnIndex: 1 },
		{ rowIndex: 2, columnIndex: 1 },
	],
	[
		{ rowIndex: 0, columnIndex: 2 },
		{ rowIndex: 1, columnIndex: 2 },
		{ rowIndex: 2, columnIndex: 2 },
	],
	[
		{ rowIndex: 0, columnIndex: 0 },
		{ rowIndex: 1, columnIndex: 1 },
		{ rowIndex: 2, columnIndex: 2 },
	],
	[
		{ rowIndex: 0, columnIndex: 2 },
		{ rowIndex: 1, columnIndex: 1 },
		{ rowIndex: 2, columnIndex: 0 },
	],
];
