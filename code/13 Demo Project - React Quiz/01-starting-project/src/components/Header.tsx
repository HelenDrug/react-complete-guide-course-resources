import type {ReactElement} from "react";

export function Header (): ReactElement {
    return(
        <header>
            <img src="/quiz-logo.png" alt="Quiz logo" />
            <h1>React Quiz</h1>
            <p>Test your knowledge with this React quiz!</p>
        </header>
    )
}