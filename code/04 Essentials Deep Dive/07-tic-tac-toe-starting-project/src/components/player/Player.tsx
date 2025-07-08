import { type ChangeEvent, type ReactElement, useState } from 'react';

interface PlayerProps {
	name: string;
	symbol: string;
	isActive: boolean;
	onChangeName: (symbol: string, name: string) => void;
}

/**
 * @Component Player
 * Displays player information and allow editing of the player's name.
 * @param name - The name of the player.
 * @param symbol - The symbol representing the player (e.g., 'X' or 'O').
 * @param isActive - Indicates if the player is currently active.
 * @param onChangeName - Callback function to handle player name changes.
 */
export default function Player({
	name,
	symbol,
	isActive,
	onChangeName,
}: Readonly<PlayerProps>): ReactElement {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	const handleEdit = () => {
		setIsEditing((prevValue) => !prevValue);
		if (isEditing) onChangeName(symbol, playerName);
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPlayerName(event.target.value);
	};
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className={'player'}>
				{isEditing ? (
					<input type={'text'} required value={playerName} onChange={handleChange} />
				) : (
					<span className={'player-name'}>{playerName}</span>
				)}
				<span className={'player-symbol'}>{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
