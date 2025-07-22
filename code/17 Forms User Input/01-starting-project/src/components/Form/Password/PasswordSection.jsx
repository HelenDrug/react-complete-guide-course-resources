import FormRow from "../FormRow.jsx";
import Password from "./Password.jsx";
import ConfirmPassword from "./ConfirmPassword.jsx";

export default function PasswordSection() {
    return<FormRow>
        <Password/>
        <ConfirmPassword/>
    </FormRow>
}