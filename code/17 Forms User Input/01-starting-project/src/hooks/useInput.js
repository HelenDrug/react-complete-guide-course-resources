import {useState} from "react";

export function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const [isEdited, setIsEdited] = useState(false);

    const handleBlur = () => {
        setIsEdited(true)
    }
    const handleChange = (event) => {
        setIsEdited(false);
        setValue(event.target.value)
    };

    return {
        value,
        isEdited,
        handleChange,
        handleBlur
    }
}