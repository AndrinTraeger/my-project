import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { laptops } from "../../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export let laptopId;
export let cartLaptops = [];
export let favLaptops = [];
const Laptops = () =>{
    const navigate = useNavigate()
    const [laptop, setLaptop] = useState(laptops);

    const handleCart = (id) =>{
        const exactPhone = laptop.filter((item)=> item.id === id);
        exactPhone.map((item)=>{
            toast(`${item.title} has been added to your cart 👍`)
            cartLaptops = [...cartLaptops, item]
        })
        }
    
        const handleWishlist = (id) =>{
            const exactPhone = laptop.filter((item)=> item.id === id);
            exactPhone.map((item)=>{
                toast(`${item.title} has been added to your Wishlist ❤️`)
                favLaptops = [...favLaptops, item];
            })
        }
        const handleLaptopClick = (id) =>{
            
            const exactItem = laptop.filter((item)=> item.id === id);
            exactItem.map((item) =>{
                laptopId = item;
                console.log(laptopId)
                
            })
            navigate("/homepage/product/laptops")
            console.log(laptopId)
        }

    return (
        <>
        <ToastContainer/>
        <div className="container">
        <ul>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage">Phones</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage/tablets">Tablets</Link></button>
            <button className="active">Laptops</button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/pcs">Pc's</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/others">Other Devices</Link></button>
        </ul>
        </div>
        <div>
        <section>
            <div className="products-container">
                <div className="cards">
                {laptops.map(product =>(
                <div key={product.id} className="card">
                    <h2>{product.title}</h2>
                    <button className="btn-cart" onClick={()=>handleWishlist(product.id)}>❤️</button>
                    <img className="promImg" src={product.img} alt={product.title} onClick={()=> handleLaptopClick(product.id)}></img>
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

export default Laptops