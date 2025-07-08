import type { ReactElement } from 'react';

export default function GameHeader(): ReactElement {
	return (
		<header>
			<img src="/game-logo.png" alt="Game Logo" />
			<h1>Tic-Tac-Toe</h1>
		</header>
	);
}
