import { useNavigate } from "react-router-dom";
import {useContext, createContext, useState} from "react";
import { UserContext } from "../App";
import { ToastContainer, toast } from "react-toastify/dist/components";
const Logout = () =>{
const navigate = useNavigate();
const [user, setUser ] = useContext(UserContext);
setUser({...user, loggedIn: null})
toast("You have been successfully logged out");
navigate("/")
}

export default Logout;