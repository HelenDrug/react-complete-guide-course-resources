import type { ReactElement } from 'react';
import Player from './Player';
import { PlayerSymbol } from '../types';

interface PlayersProps {
	activePlayerSymbol: string;
}

/**
 * @Component Players
 * Displays the list of players in the game, highlighting the active player.
 * @param activePlayerSymbol - The symbol of the currently active player (either 'X' or 'O').
 */
export default function Players({ activePlayerSymbol }: Readonly<PlayersProps>): ReactElement {
	return (
		<ol id={'players'} className={'highlight-player'}>
			<Player
				name={'Player 1'}
				symbol={PlayerSymbol.X}
				isActive={activePlayerSymbol === PlayerSymbol.X}
			/>
			<Player
				name={'Player 2'}
				symbol={PlayerSymbol.O}
				isActive={activePlayerSymbol === PlayerSymbol.O}
			/>
		</ol>
	);
}
