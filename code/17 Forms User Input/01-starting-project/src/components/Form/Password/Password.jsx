import {Input} from "../../Input.jsx";
import {hasMinLength} from "../../../util/validation.js";
import {useInput} from "../../../hooks/useInput.js";

export default function Password() {
    const {handleChange, handleBlur, isEdited, value} = useInput("");

    const invalidPassword = !hasMinLength(value, 6) && isEdited;

    return <Input control={"password"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={value}
                  error={invalidPassword && "Please enter a valid password"}/>
}