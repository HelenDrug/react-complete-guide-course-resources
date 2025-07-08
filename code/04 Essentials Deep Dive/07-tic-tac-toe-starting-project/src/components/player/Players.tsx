import type { ReactElement } from 'react';
import Player from './Player';
import { type PlayersRecord } from '../types';

interface PlayersProps {
	activePlayerSymbol: string;
	onChangeName: (symbol: string, name: string) => void;
	players: PlayersRecord;
}

/**
 * @Component Players
 * Displays the list of players in the game, highlighting the active player.
 * @param activePlayerSymbol - The symbol of the currently active player (either 'X' or 'O').
 * @param onChangeName - Callback function to handle player name changes.
 * @param players - Record of players with their symbols and names.
 */
export default function Players({
	activePlayerSymbol,
	onChangeName,
	players,
}: Readonly<PlayersProps>): ReactElement {
	const { X, O } = players;
	const { name: xName, symbol: xSymbol } = X;
	const { name: oName, symbol: oSymbol } = O;
	return (
		<ol id={'players'} className={'highlight-player'}>
			<Player
				name={xName}
				symbol={xSymbol}
				isActive={activePlayerSymbol === xSymbol}
				onChangeName={onChangeName}
			/>
			<Player
				name={oName}
				symbol={oSymbol}
				isActive={activePlayerSymbol === oSymbol}
				onChangeName={onChangeName}
			/>
		</ol>
	);
}
