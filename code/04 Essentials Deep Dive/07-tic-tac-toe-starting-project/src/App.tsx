import type {ReactElement} from 'react';

function App(): ReactElement {
    return (
        <main>
            <div id={"game-container"}>
                <ol id={"players"}>
                    <li><span className={"player-name"}>Player 1</span></li>
                    <li><span className={"player-symbol"}>X</span></li>
                </ol>
            </div>
        </main>
    );
}

export default App;

