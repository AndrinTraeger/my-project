import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { computers } from "../../data";
import { useNavigate } from "react-router-dom";
export let computerId;
export let cartComputers = [];
export let favComputers = [];
const Computer = () =>{
    const [computer, setComputer] = useState(computers);
    const navigate = useNavigate();
    const handleCart = (id) =>{
        const exactPhone = computer.filter((item)=> item.id === id);
        exactPhone.map((item)=>{
            toast(`${item.title} has been added to your cart 👍`)
            cartComputers = [...cartComputers, item]
        })
        }
    
        const handleWishlist = (id) =>{
            const exactPhone = computer.filter((item)=> item.id === id);
            exactPhone.map((item)=>{
                toast(`${item.title} has been added to your Wishlist ❤️`)
                favComputers = [...favComputers, item];
            })
        }
        const handleComputerClick = (id) =>{
            
            const exactItem = computer.filter((item)=> item.id === id);
            exactItem.map((item) =>{
                computerId = item;
                console.log(computerId)
                
            })
            navigate("/homepage/product/computers")
        }


    return (
        <>
        <ToastContainer/>
        <div className="container">
        <ul>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage">Phones</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage/tablets">Tablets</Link></button>
            <button className="btn-transparent"><Link className="link-unclicked" to ="/homepage/laptops">Laptops</Link></button>
            <button className="active">Pc's</button>
            <button className="btn-transparent"><Link className="link-unclicked" to="/homepage/others">Other Devices</Link></button>
        </ul>
        
        </div>
        <div>
        <section>
            <div className="products-container">
                <div className="cards">
                {computer.map(product =>(
                <div key={product.id} className="card">
                    <h2>{product.title}</h2>
                    <button className="btn-cart" onClick={()=>handleWishlist(product.id)}>❤️</button>
                    <img className="promImg" src={product.img} alt={product.title} onClick={()=> handleComputerClick(product.id)}></img>
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

export default Computer;