import type { ReactElement } from 'react';

interface GameOverProps {
	onRestart: () => void;
	winner?: string;
}

/**
 * @Component GameOver
 * Displays the game over screen with the winner or draw message and a button to restart the game.
 * @param winner - The symbol of the winning player, if any.
 * @param onRestart - Callback function to restart the game.
 */
export default function GameOver({ winner, onRestart }: Readonly<GameOverProps>): ReactElement {
	return (
		<div id="game-over">
			<h2>Game Over</h2>
			{winner && <p>{winner} won!</p>}
			{!winner && <p>Its a draw!</p>}
			<button onClick={onRestart}>Play Again</button>
		</div>
	);
}
