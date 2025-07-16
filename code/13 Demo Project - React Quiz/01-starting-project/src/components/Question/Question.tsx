import {type ReactElement, useCallback} from "react";
import {QuestionTimer} from "./QuestionTimer";
import type {AnswerType} from "../../types";

interface QuestionProps {
    text: string;
    onTimeOut: (answer: AnswerType | null) => void;
}

export function Question({text, onTimeOut}: Readonly<QuestionProps>): ReactElement {
    const handleTimeOut = useCallback(
        () => {
            onTimeOut(null);
        },
        [onTimeOut]
    );
    return (
        <div id="question">
            <QuestionTimer key={text} timeout={10000} onTimeout={handleTimeOut}/>
            <h2>{text}</h2>
        </div>)
}