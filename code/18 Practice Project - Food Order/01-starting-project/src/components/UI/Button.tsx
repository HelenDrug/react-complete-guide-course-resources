import type {ReactElement, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    textOnly?: boolean;
    className?: string
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined
}

export default function Button({children, textOnly, className, onClick, type = "button"}: ButtonProps): ReactElement {
    const cssClasses = textOnly ? `text-button ${className}` : `button ${className}`;
    return <button className={cssClasses} onClick={onClick} type={type}>{children}</button>
}