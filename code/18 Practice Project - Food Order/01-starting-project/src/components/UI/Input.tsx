import type {ReactElement} from "react";

interface InputProps {
    label: string;
    id: string;
    type: string;
}
export default function Input({label, id, type}: Readonly<InputProps>): ReactElement{
    return(
        <p className="control">
            <label className="label" htmlFor={id}>{label}</label>
            <input id={id} name={id} required type={type}/>
        </p>
    )
}