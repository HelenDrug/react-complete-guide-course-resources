export type GameBoardType = (string | null)[][];

export enum PlayerSymbol {
	X = 'X',
	O = 'O',
}

interface Position {
	rowIndex: number;
	columnIndex: number;
}

export interface GameTurn {
	position: Position;
	playerSymbol: string;
}

export type Combination = Position[];

export type WinningCombinations = Combination[];
