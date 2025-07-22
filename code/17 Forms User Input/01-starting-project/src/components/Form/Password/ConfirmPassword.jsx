export default function ConfirmPassword() {
    return (
        <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
                id="confirm-password"
                type="password"
                name="confirm-password"
            />
        </div>
    );
}