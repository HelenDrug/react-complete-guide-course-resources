import {Header} from "./components/Header";
import type {ReactElement} from "react";
import {Quiz} from "./components/Quiz/Quiz";

function App(): ReactElement {
    return (
        <>
            <Header/>
            <main>
                <Quiz/>
            </main>

        </>
    )
}

export default App;
