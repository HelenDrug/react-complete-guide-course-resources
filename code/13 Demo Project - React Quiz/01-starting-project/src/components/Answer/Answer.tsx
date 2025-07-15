import type {ReactElement} from "react";

interface AnswerProps {
    answer: string;
    onSelectAnswer: (answer: string) => void;
}

export function Answer({answer, onSelectAnswer}: Readonly<AnswerProps>): ReactElement {

    return (
        <li className="answer">
            <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
        </li>
    )
}