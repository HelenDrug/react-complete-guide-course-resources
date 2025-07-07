import type { ReactElement } from 'react';
import Player from './components/Player';

function App(): ReactElement {
	return (
		<>
			<header>
				<img src="/game-logo.png" alt="Game Logo" />
				<h1>Tic-Tac-Toe</h1>
			</header>
			<main>
				<div id={'game-container'}>
					<ol id={'players'}>
						<Player name={'Player 1'} symbol={'X'} />
						<Player name={'Player 2'} symbol={'0'} />
					</ol>
				</div>
			</main>
		</>
	);
}

export default App;
