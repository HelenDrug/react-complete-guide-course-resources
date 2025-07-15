import type {ReactElement} from "react";
import {QuestionTimer} from "./QuestionTimer";
import type {AnswerType} from "../../types";

interface QuestionProps {
    text: string;
    onTimeOut: (answer: AnswerType | null) => void;
}

export function Question({text, onTimeOut}: Readonly<QuestionProps>): ReactElement {
    return (
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={() => onTimeOut(null)}/>
            <h2>{text}</h2>
        </div>)
}