import {Input} from "../Input.jsx";
import {isEmail, isNotEmpty} from "../../util/validation.js";
import {useInput} from "../../hooks/useInput.js";

export default function Email() {
    const {handleChange, handleBlur, isEdited, value} = useInput('');

    const invalidEmail = !isEmail(value) && isEdited && isNotEmpty(value)

    return <Input control={"email"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={value}
                  error={invalidEmail && "Please enter a valid email address"}/>
}