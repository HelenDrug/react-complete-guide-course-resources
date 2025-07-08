import type { ReactElement } from 'react';
import GameHeader from './components/game/GameHeader';
import MainGame from './components/game/MainGame';

export default function App(): ReactElement {
	return (
		<>
			<GameHeader />
			<MainGame />
		</>
	);
}
