import Navbar from "./Navbar/Navbar"
import Login from './Login/login';
import SignUp from "./Login/signup";
import Homepage from "./Homepage/homepage";
import Tablets from "./Homepage/products/tablets";
import Laptops from "./Homepage/products/laptops";
import Computer from "./Homepage/products/computers";
import Others from "./Homepage/products/others";
import Contact from "./Homepage/contact/contact";
import About from "./Homepage/About/about";
import Cart from "./Homepage/profile/cart";
import Profile from "./Homepage/profile/profile";
import Wishlist from "./Homepage/profile/wishlist";
import ShowProduct from "./Homepage/showProduct";
import ShowTablets from "./Homepage/products/tablets/showTablets";
import ShowLaptops from "./Homepage/products/laptops/showLaptops";
import ShowComputers from "./Homepage/products/computers/showComputer";
import ShowOthers from "./Homepage/products/others/showOthers";
import { useState, createContext } from "react";
import { users} from "./data";
import './App.css';
import {Routes, Route} from "react-router-dom";

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState(users);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Navbar/>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/homepage/tablets" element={<Tablets/>}/>
        <Route path="/homepage/laptops" element={<Laptops/>}/>
        <Route path="/homepage/pcs" element={<Computer/>}/>
        <Route path="/homepage/others" element={<Others/>}/>
        <Route path="/homepage/product" element={<ShowProduct/>}/>
        <Route path="/homepage/product/tablets" element={<ShowTablets/>}/>
        <Route path="/homepage/product/laptops" element={<ShowLaptops/>}/>
        <Route path="/homepage/product/computers" element={<ShowComputers/>}/>
        <Route path="/homepage/product/others" element={<ShowOthers/>}/>
        <Route path="/homepage/about" element={<About/>}/>
        <Route path="/homepage/contact" element={<Contact/>}/>
        <Route path="/homepage/profile" element={<Profile/>}/>
        <Route path="/homepage/cart" element={<Cart/>}/>
        <Route path="/homepage/wishlist" element={<Wishlist/>}/>
      </Routes>
      </UserContext.Provider>
  );
}

export default App;
