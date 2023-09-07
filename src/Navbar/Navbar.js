import "./Navbar.css";
import {Routes, Route, Link} from "react-router-dom";
import { useState, useContext, createContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () =>{
const navigate = useNavigate();
const [user, setUser] = useContext(UserContext);
const [open, setOpen] = useState(false);

const handleOpen = () =>{
  setOpen(!open);
};

const logout = () =>{
setUser({...user, loggedIn: null})
toast("You have been successfully logged out");
navigate("/")
}

const navigateToShop = () =>{
  navigate("/homepage")
}
const navigateToContact = () =>{
  navigate("/homepage/contact")
}
const navigateToAbout = () =>{
  navigate("/homepage/about")
}


const Menus = ['Profile', "Your Cart", "Your Favorites"]

return(
    <>
<div className="header">
  {user.loggedIn?(
        <>
        <div className="container-userInfo">
        <img 
        className="img-profile"
        src={user.img} 
        alt="">
        </img>
        </div>
      <button className="btn-transparent" style={{marginTop: "1.2%"}} onClick={handleOpen}>Hello, {user.username}</button>
      <button className="btn" onClick={logout}>Logout</button>
      <div className="header-right">
        <button onClick={navigateToShop} className="btn-transparent">Shop</button>
        <button onClick={navigateToContact}className="btn-transparent">Contact</button>
        <button onClick={navigateToAbout} className="btn-transparent">About</button>
  </div>
  {open? 
      <div className="dropdown">
        <ul>
          <li><Link style={{textDecoration: "none", color:"dodgerblue"}} to ="/homepage/profile">Profile</Link></li>
          <li><Link style={{textDecoration: "none", color:"dodgerblue"}} to ="/homepage/cart">Your Cart</Link></li>
          <li><Link style={{textDecoration: "none", color:"dodgerblue"}} to ="/homepage/wishlist">Wishlist</Link></li>
        </ul>
        </div> : <></>}
      </>
        
     ):(
  <>
  <div className="container-userInfo">
  <img 
  className="img-profile"
  src="https://creativeandcultural.files.wordpress.com/2018/04/default-profile-picture.png" 
  alt="">
  </img>
  </div>
  <button className="btn-transparent" style={{marginTop: "1.2%"}}><Link style={{textDecoration: "none", color: "dodgerblue"}} to = "/">Please Login</Link></button>
  </>
  
  )
}
</div>
</>
    )
}

export default Navbar;