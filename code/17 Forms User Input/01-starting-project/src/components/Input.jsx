export function Input({control, handleChange, handleBlur, value, error}) {
    return (
        <div className="control">
            <label htmlFor={control}>{control}</label>
            <input id={control}
                   type={control}
                   name={control}
                   onChange={handleChange}
                   value={value}
                   onBlur={handleBlur}
            />
            <div className="control-error">
                {error && <span className="error">{error}</span>}
            </div>
        </div>)
}