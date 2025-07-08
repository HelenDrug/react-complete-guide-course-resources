import type { ReactElement } from 'react';
import type { GameTurn } from './types';

interface LogProps {
	turns: GameTurn[];
}

/**
 * @Component Log
 * Displays the log of game turns, showing the player symbol and the position selected in each turn.
 * @param turns - An array of game turns, each containing the player symbol and the position selected.
 */
export default function Log({ turns }: Readonly<LogProps>): ReactElement {
	return (
		<ol id={'log'}>
			{turns.map((turn) => (
				<li key={`${turn.position.rowIndex}-${turn.position.columnIndex}`}>
					{turn.playerSymbol} selected {turn.position.rowIndex},{' '}
					{turn.position.columnIndex}
				</li>
			))}
		</ol>
	);
}
