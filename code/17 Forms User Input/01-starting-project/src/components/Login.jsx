import Email from "./Form/Email.jsx";
import Password from "./Form/Password/Password.jsx";
import FormActions from "./Form/FormActions.jsx";
import FormRow from "./Form/FormRow.jsx";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log("User email:", email);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <FormRow>
                <Email onChange={handleEmailChange} email={email} />
                <Password onChange={handlePasswordChange} password={password}/>
            </FormRow>
            <FormActions/>
        </form>
    );
}
