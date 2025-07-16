import {type ReactElement, useCallback, useRef, useState} from "react";
import type {AnswerType} from "../../types";
import {QUESTIONS} from "../Question/questions";
import {Question} from "../Question/Question";
import {Answers} from "../Answer/Answers";
import {QuizComplete} from "./QuizComplete";

export function Quiz(): ReactElement {
    const [answers, setAnswers] = useState<(AnswerType | null)[]>([]);

    const currentQuestion = QUESTIONS[answers.length];
    const quizIsComplete = answers.length === QUESTIONS.length;

    let shuffledAnswers: AnswerType[] = useRef<AnswerType[]>([]).current;
    if (currentQuestion) {
        shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
    }

    const handleSelectAnswer = useCallback((answer: AnswerType | null): void => {
        setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }, []);

    return (
        <div id="quiz">
            {currentQuestion && (
                <>
                    <Question text={currentQuestion.text} onTimeOut={handleSelectAnswer}/>
                    <Answers answers={shuffledAnswers} onSelectAnswer={handleSelectAnswer}/>
                </>
            )}
            {quizIsComplete && <QuizComplete/>}
        </div>
    )
}