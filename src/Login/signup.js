import "./signup.css";
const SignUp = () =>{
    return(
        <section>
            <form className="form">
                <h2>Sign-Up</h2>
                <label className="form-label">Prename</label>
                <input type="text" className="form-input"></input>
                <label className="form-label">Name</label>
                <input type="text" className="form-input"></input>
                <label className="form-label">Age</label>
                <input type="date" className="form-input"></input>
                <label className="form-label">Username *</label>
                <input className="form-input" type="text"></input>
                <label className="form-label">E-Mail *</label>
                <input type="email" className="form-input"></input>
                <label className="form-label">Password *</label>
                <input type="password" className="form-input"></input>
                <label className="form-label">Confirm Password *</label>
                <input type="password" className="form-input"></input>
            </form>
        </section>
    )
}
export default SignUp;