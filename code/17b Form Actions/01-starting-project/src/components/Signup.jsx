import {validateFormData} from "../util/validateFormData.js";
import {useActionState} from 'react'

export default function Signup() {

    const [formSate, formAction] = useActionState(
        (prevState, formData) => {
            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
                confirmPassword: formData.get('confirm-password'),
                firstName: formData.get('first-name'),
                lastName: formData.get('last-name'),
                role: formData.get('role'),
                terms: formData.get('terms'),
                acquisition: formData.getAll('acquisition'),
            };
            return validateFormData(data);
        },
        { errors: [] }
    );
    return (
        <form action={formAction}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>

            <div className="control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"/>
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"/>
                </div>

                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                    />
                </div>
            </div>

            <hr/>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name"/>
                </div>

                <div className="control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name"/>
                </div>
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select id="role" name="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="acquisition"
                        value="google"
                    />
                    <label htmlFor="google">Google</label>
                </div>

                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value="friend"
                    />
                    <label htmlFor="friend">Referred by friend</label>
                </div>

                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other"/>
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>

            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms"/>I
                    agree to the terms and conditions
                </label>
            </div>
            {formSate.errors.length > 0 && <ul className={"error"}>
                {formSate.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>}
            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button className="button">Sign up</button>
            </p>
        </form>
    );
}
