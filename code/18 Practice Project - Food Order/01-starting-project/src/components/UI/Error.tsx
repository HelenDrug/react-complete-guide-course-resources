import type {ReactElement} from "react";

interface ErrorProps {
    title: string
    message: string;
}

export default function Error({title, message}: ErrorProps): ReactElement {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}