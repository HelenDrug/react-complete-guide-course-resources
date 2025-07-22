export default function FormFieldset({question, children}) {
    return (
        <fieldset>
            <legend>{question}</legend>
            {children}
        </fieldset>
    )
}