import Email from "./Form/Email.jsx";
import Password from "./Form/Password/Password.jsx";
import FormActions from "./Form/FormActions.jsx";
import FormRow from "./Form/FormRow.jsx";

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User email:");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <FormRow>
                <Email/>
                <Password/>
            </FormRow>
            <FormActions/>
        </form>
    );
}
