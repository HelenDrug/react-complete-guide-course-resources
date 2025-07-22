import Email from "./Form/Email.jsx";
import Role from "./Form/Role.jsx";
import FormHeader from "./Form/FormHeader.jsx";
import FindUsFieldset from "./Form/FindUsFieldset/FindUsFieldset.jsx";
import PasswordSection from "./Form/Password/PasswordSection.jsx";
import NameSection from "./Form/Name/NameSection.jsx";
import TermsInput from "./Form/TermsInput.jsx";
import FormActions from "./Form/FormActions.jsx";

export default function Signup() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormHeader/>
            <Email/>
            <PasswordSection/>
            <hr/>
            <NameSection/>
            <Role/>
            <FindUsFieldset/>
            <TermsInput/>
            <FormActions/>
        </form>
    );
}