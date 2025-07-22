import {useState} from "react";

export default function Email({onChange, email}) {
    const [isEdited, setIsEdited] = useState(false);

    const invalidEmail = !email.includes('@') && isEdited;

    const handleBlur =()=>{
        setIsEdited(true)
    }
    const handleChange = (e) => {
        setIsEdited(false);
        onChange(e);
    };

    return (
        <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" onChange={handleChange} value={email}
            onBlur={handleBlur }
            />
            <div className="control-error">
                {invalidEmail && <span className="error">Please enter a valid email address.</span>}
            </div>
        </div>)
}