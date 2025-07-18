import {type ReactElement, useEffect, useState} from "react";

interface QuestionTimerProps {
    timeout: number;
    onTimeout: () => void;
}

export function QuestionTimer({timeout, onTimeout}: QuestionTimerProps): ReactElement {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => {
            clearTimeout(timer);
        };
    }, [onTimeout, timeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        };
    }, [timeout])

    return (
        <progress id={"question-time"} max={timeout} value={remainingTime}/>
    )
}