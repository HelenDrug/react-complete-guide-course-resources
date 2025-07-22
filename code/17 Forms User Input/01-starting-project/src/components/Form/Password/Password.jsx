export default function Password({onChange, password}) {
    return (
        <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={onChange} value={password}/>
        </div>
    );
}