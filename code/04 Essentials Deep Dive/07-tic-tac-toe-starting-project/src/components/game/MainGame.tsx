import { type ReactElement, useMemo, useState } from 'react';
import GameBoard from './GameBoard';
import Players from '../player/Players';
import { type GameTurn, type GameBoardType, PlayerSymbol } from '../types';
import Log from '../Log';
import { WINNING_COMBINATIONS } from '../../util/winningCombinations';
import GameOver from './GameOver';

/**
 * Derives the active player symbol based on the current game turns.
 * If there are no turns, it defaults to PlayerSymbol.X.
 * @param turns - An array of game turns, each containing the player symbol and the position selected.
 *
 * @returns The symbol of the active player (either PlayerSymbol.X or PlayerSymbol.O).
 */
const deriveActivePlayerSymbol = (turns: GameTurn[]): string => {
	if (turns.length === 0) {
		return PlayerSymbol.X;
	}
	return turns[0].playerSymbol === PlayerSymbol.X ? PlayerSymbol.O : PlayerSymbol.X;
};
/**
 * Derives the game board state based on the current game turns.
 * It initializes an empty game board and fills it with player symbols based on the turns taken.
 * @param turns - An array of game turns, each containing the player symbol and the position selected.
 *
 * @return A 2D array representing the game board, where each cell contains the player symbol or null if unselected.
 */
const deriveGameBoard = (turns: GameTurn[]): GameBoardType => {
	const initialGameBoard: GameBoardType = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	for (const turn of turns) {
		const {
			position: { rowIndex, columnIndex },
			playerSymbol,
		} = turn;
		initialGameBoard[rowIndex][columnIndex] = playerSymbol;
	}

	return initialGameBoard;
};
/**
 * Derives the winner symbol based on the current game board state.
 * It checks all winning combinations to see if any player has won.
 * @param gameBoard - The current state of the game board, represented as a 2D array.
 *
 * @return The symbol of the winning player if there is a winner, otherwise an empty string.
 */
const deriveWinnerSymbol = (gameBoard: GameBoardType): string => {
	let winner;
	for (const combinations of WINNING_COMBINATIONS) {
		const [first, second, third] = combinations.map(
			(pos) => gameBoard[pos.rowIndex][pos.columnIndex]
		);
		if (first && first === second && first === third) {
			winner = first;
		}
	}
	return winner || '';
};

/**
 * @Component MainGame
 * Manages the game state, handles player turns, and displays the game board, players, and game log.
 */
export default function MainGame(): ReactElement {
	// State to keep track of game turns
	const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

	const activePlayerSymbol = useMemo(() => deriveActivePlayerSymbol(gameTurns), [gameTurns]);
	const gameBoard = useMemo(() => deriveGameBoard(gameTurns), [gameTurns]);
	const winnerSymbol = useMemo(() => deriveWinnerSymbol(gameBoard), [gameBoard]);
	const hasDraw = useMemo(
		() => gameTurns.length === 9 && !winnerSymbol,
		[gameTurns, winnerSymbol]
	);

	const handleSelectPlayer = (rowIndex: number, columnIndex: number) =>
		setGameTurns((prevTurns) => {
			return [
				{
					position: { rowIndex, columnIndex },
					playerSymbol: deriveActivePlayerSymbol(prevTurns),
				},
				...prevTurns,
			];
		});

	const handleRestartGame = () => setGameTurns([]);

	return (
		<main>
			<div id={'game-container'}>
				<Players activePlayerSymbol={activePlayerSymbol} />
				{(winnerSymbol || hasDraw) && (
					<GameOver winner={winnerSymbol} onRestart={handleRestartGame} />
				)}
				<GameBoard onSelectSquare={handleSelectPlayer} gameBoard={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}
