import "./login.css"
import {Link, Routes, Rout, useNavigate} from "react-router-dom";
import {useContext, createContext, useState} from "react";
import { UserContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () =>{
    const [user, setUser ] = useContext(UserContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username === user.email && password === user.password){
               // setUser(user.loggedIn = true);
               setUser({...user, loggedIn: true})
                console.log("A", user)
                toast(`Your login has been successful \n Welcome ${user.username}`)
                navigate("/homepage")
                
                
            }
            else{
                window.alert("The Email or Password you entered are wrong");
            }
    }

    return (
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <img style={{borderRadius: "100%", width: "15%"}}src="https://creativeandcultural.files.wordpress.com/2018/04/default-profile-picture.png" alt=""></img>
                <div style={{marginLeft: "-25px"}}>
                <label className="form-label">E-Mail</label>
                <input 
                className="form-input"
                value={username}
                onChange={(e) => setUsername( e.target.value)}
                ></input>
                <label className="form-label">Password</label>
                <input 
                type="password" 
                className="form-input"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                ></input>
                </div>
                <div className="btn-container">
                    <Link to="/signup"><button type="button" className="btn" style={{marginRight: "12px"}}>Sign-Up</button></Link>
                    <button type="submit"className="btn">Login</button>
                </div>
                <a href="#default"><p style={{fontSize: "12px", color: "black"}}>Forgot your password?</p></a>
            </form>
        </section>
    )
}

export default Login;