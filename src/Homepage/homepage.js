import { Link, useNavigate } from "react-router-dom";
import "./homepage.css"
import { phones } from "../data";
import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export let cartPhones = [];
export let favPhones = [];
export let dataId;
const Homepage = () =>{
    const [phone, setPhone] = useState(phones);
    const [cartObject, setCartObject] = useState();
    const navigate = useNavigate();
    
    const handleCart = (id) =>{
    const exactPhone = phone.filter((item)=> item.id === id);
    exactPhone.map((item)=>{
        toast(`${item.title} has been added to your cart 👍`)
        cartPhones = [...cartPhones, item]
    })
    }
    const handleWishlist = (id) =>{

        const exactPhone = phone.filter((item)=> item.id === id);
        exactPhone.map((item)=>{
            toast(`${item.title} has been added to your Wishlist ❤️`)
            favPhones = [...favPhones, item];
        })
    }
    const handleProdClick = (id) =>{
        const exactItem = phone.filter((item)=> item.id === id);
        exactItem.map((item)=>{
            dataId = item;
        })
        navigate("/homepage/product")
    }
    return (
        <>
        <ToastContainer/>
    <div className="shop">
        <div className="container">
            <div className="product-navigation">
            <ul>
            <button className="active">Phones</button>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage/tablets">Tablets</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/laptops">Laptops</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/pcs">Pc's</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/others">Other Devices</Link></button>
            </ul>
            </div>
        </div> 
    </div>
    <div>
        <section>
            <div className="products-container">
                <div className="cards">
                {phones.map(product =>(
                <div key={product.id} className="card">
                    <h2>{product.title}</h2>
                    <button className="btn-cart" onClick={()=>handleWishlist(product.id)}>❤️</button>
                    <img className="promImg" src={product.img} alt={product.title} onClick={()=> handleProdClick(product.id)}></img>
                    <h3>{product.price} CHF.-</h3>
                    <div className="bottom-container">
                    <button className="btn-cart" onClick={()=> handleCart(product.id)}>🛒</button>
                    <button className="btn-cart">Buy</button>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </section>     
    </div>
           
    
    </>
    )
}

export default Homepage;