import type {ReactElement, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    textOnly?: boolean;
    className?: string
    onClick?: () => void;
}

export default function Button({children, textOnly, className, onClick}: ButtonProps): ReactElement {
    const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`;
    return <button className={cssClasses} onClick={onClick}>{children}</button>
}