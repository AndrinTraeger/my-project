import { useContext, createContext } from "react";
import { UserContext } from "../../App";
import "./userinfo.css"
import { ToastContainer, toast } from 'react-toastify';

const Profile = () =>{
    const [user, setUser] = useContext(UserContext);
    let usernameInput = user.username;
    let nameInput = user.name;
    let prenameInput = user.prename;
    let birthdayInput = user.birthday;
    let emailInput = user.email;
    let passwordInput 
    let newPasswordInput = user.password;
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(passwordInput === user.password){
            setUser({...user, 
                username: usernameInput, 
                name: nameInput,
                prename: prenameInput,
                birthday: birthdayInput,
                email: emailInput,
                password: newPasswordInput,
                loggedIn: true
            });
            toast(`Your Changes have successfully saved ${usernameInput}`)
        }
        else{
            window.alert("The Password was wrong")
        }
        
        
        console.log(user)
        console.log(usernameInput);
        console.log(nameInput)
        console.log(prenameInput)
        console.log(birthdayInput)
        console.log(emailInput)
        console.log(passwordInput)
        console.log(newPasswordInput)

    }
    return(
            <form className="form">
                <ToastContainer/>
                <div>
                    <img className="info-profileImg" src={user.img} alt={user.username}></img>
                </div>
                <div style={{marginRight: "0", marginTop: "5%"}}>
                    <h3>Personal Information</h3>
                    <label className="form-label">Your Username:</label>
                    <input 
                    className="form-input" 
                    type="text" 
                    placeholder={user.username}
                    onChange={(e) => usernameInput = e.target.value}
                    >
                    </input>
                    <label className="form-label">Your Name:</label>
                    <input 
                    className="form-input" 
                    type="text" 
                    placeholder={user.name}
                    onChange={(e) => nameInput = e.target.value}
                    >
                    </input>
                    <label className="form-label">Your Prename:</label>
                    <input 
                    className="form-input" 
                    type="text" 
                    placeholder={user.prename}
                    onChange={(e) => prenameInput = e.target.value}
                    >
                    </input>
                    <label className="form-label">Your Birthday</label>
                    <input 
                    className="form-input" 
                    type="date" 
                    placeholder={user.birthday}
                    onChange={(e) => birthdayInput = e.target.value}
                    >
                    </input>
                    <h3>Safety Information</h3>
                    <label className="form-label">Your Email:</label>
                    <input 
                    className="form-input" 
                    type="email" 
                    placeholder={user.email}
                    onChange={(e) => emailInput = e.target.value}
                    >
                    </input>
                    <label className="form-label">Your Password: *</label>
                    <input 
                    className="form-input" 
                    type="password"
                    onChange={(e) => passwordInput = e.target.value}
                    >
                    </input>
                    <label className="form-label">New Password</label>
                    <input 
                    className="form-input" 
                    type="password"
                    onChange={(e) => newPasswordInput = e.target.value}
                    >
                    </input>
                    <button className="btn" onClick={handleSubmit}>Safe Changes</button>
                    <p style={{fontSize: "2%"}}>* Obligatory input for changes</p>
                </div>
            </form>     
    )
}

export default Profile;