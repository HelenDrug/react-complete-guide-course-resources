import { type ReactElement } from 'react';
import type { GameBoardType } from '../types';

interface GameBoardProps {
	onSelectSquare: (rowIndex: number, colIndex: number) => void;
	gameBoard: GameBoardType;
}

/**
 * @Component GameBoard
 * Renders the game board for a Tic Tac Toe game.
 * @param onSelectSquare
 * @param gameBoard
 * @constructor
 */
export default function GameBoard({
	onSelectSquare,
	gameBoard,
}: Readonly<GameBoardProps>): ReactElement {
	return (
		<ol id={'game-board'}>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, columnIndex)}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
