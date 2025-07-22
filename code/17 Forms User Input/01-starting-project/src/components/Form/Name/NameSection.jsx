import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import FormRow from "../FormRow.jsx";

export default function NameSection() {
    return (
        <FormRow>
            <FirstName/>
            <LastName/>
        </FormRow>
    )
}