import type {ReactElement} from "react";
import type {AnswerType} from "../../types";
import {Answer} from "./Answer";

interface AnswersProps {
    answers: AnswerType[];
    onSelectAnswer: (answer: AnswerType) => void;
}

export function Answers({answers, onSelectAnswer}: Readonly<AnswersProps>): ReactElement {
    return (
        <ul id="answers">
            {answers.map((answer) => (
                <Answer key={answer} answer={answer} onSelectAnswer={onSelectAnswer}></Answer>
            ))}
        </ul>
    )
}