import {type ReactElement, useEffect, useState} from "react";

interface QuestionTimerProps {
    timeout: number;
    onTimeout: () => void;
}

export function QuestionTimer({timeout, onTimeout}: QuestionTimerProps): ReactElement {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout)
    }, [onTimeout, timeout])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100)
    }, [])

    return (
        <progress id={"question-time"} max={timeout} value={remainingTime}/>
    )
}