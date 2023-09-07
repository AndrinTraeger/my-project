import { Link } from "react-router-dom";
import { others } from "../../data";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export let othersId;
export let cartOthers = [];
export let favOthers = [];
const Others = () =>{
    const [other, setOther] = useState(others)
    const navigate = useNavigate();
    const handleCart = (id) =>{
        const exactPhone = other.filter((item)=> item.id === id);
        exactPhone.map((item)=>{
            toast(`${item.title} has been added to your cart 👍`)
            cartOthers = [...cartOthers, item]
        })
        }
    
        const handleWishlist = (id) =>{
            const clickIndex = 0;
            const exactPhone = other.filter((item)=> item.id === id);
            exactPhone.map((item)=>{
                toast(`${item.title} has been added to your Wishlist ❤️`)
                favOthers = [...favOthers, item]
            })
        }
        const handleOthersClick = (id) =>{
            
            const exactItem = other.filter((item)=> item.id === id);
            exactItem.map((item) =>{
                othersId = item;
                console.log(othersId)
                
            })
            navigate("/homepage/product/others")
        }
    return (
        <>
        <ToastContainer/>
        <div className="container">
        <ul>
        <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage">Phones</Link></button>
        <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage/tablets">Tablets</Link></button>
        <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/laptops">Laptops</Link></button>
        <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/pcs">Pc's</Link></button>
        <button className="active">Other Devices</button>
        </ul>
        </div>
        <div>
        <section>
            <div className="products-container">
                <div className="cards">
                {other.map(product =>(
                <div key={product.id} className="card">
                    <h2>{product.title}</h2>
                    <button className="btn-cart" onClick={()=>handleWishlist(product.id)}>❤️</button>
                    <img className="promImg" src={product.img} alt={product.title} onClick={()=> handleOthersClick(product.id)}></img>
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

export default Others;