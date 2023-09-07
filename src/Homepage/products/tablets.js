import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { tablets } from "../../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export let cartTablets = [];
export let favTablets = [];
export let tabletsId;

const Tablets = () =>{
    const [tablet, setTablet] = useState(tablets);
    const navigate = useNavigate();    
    const handleCart = (id) =>{
        const exactPhone = tablet.filter((item)=> item.id === id);
        exactPhone.map((item)=>{
            toast(`${item.title} has been added to your cart 👍`)
            cartTablets = [...cartTablets, item]
        })
        }

        
    
        const handleWishlist = (id) =>{
            const exactPhone = tablet.filter((item)=> item.id === id);
            exactPhone.map((item)=>{
                toast(`${item.title} has been added to your Wishlist ❤️`)
                favTablets = [...favTablets, item]
            })
        }
        const handleTabletClick = (id) =>{
            
            const exactItem = tablet.filter((item)=> item.id === id);
            exactItem.map((item) =>{
                tabletsId = item;
                console.log(tabletsId)
            })
            navigate("/homepage/product/tablets")
        }
    return (
        <>
        <ToastContainer/>
        <div className="container">
        <ul>
        <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage">Phones</Link></button>
            <button className="active">Tablets</button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/laptops">Laptops</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/pcs">Pc's</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/others">Other Devices</Link></button>
        </ul>
        </div>
        <div>
        <section>
            <div className="products-container">
                <div className="cards">
                {tablets.map(product =>(
                <div key={product.id} className="card">
                    <h2>{product.title}</h2>
                    <button className="btn-cart" onClick={()=>handleWishlist(product.id)}>❤️</button>
                    <img className="promImg"src={product.img} alt={product.title} onClick={()=> handleTabletClick(product.id)}></img>
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

export default Tablets;