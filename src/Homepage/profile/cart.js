import "./userinfo.css"
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { cartPhones } from "../homepage";
import { cartTablets } from "../products/tablets";
import { cartLaptops } from "../products/laptops";
import { cartComputers } from "../products/computers";
import { cartOthers } from "../products/others";
import { favPhonesToCart } from "./wishlist";
import { favTabletsToCart } from "./wishlist";
import { favLaptopsToCart } from "./wishlist";
import { favComputersToCart } from "./wishlist";
import { favOthersToCart } from "./wishlist";
import { ToastContainer, toast } from "react-toastify";
const Cart = () =>{
    const [cartPhoneObject, setCartPhoneObject] = useState(cartPhones)
    const [cartTabletObject, setCartTabletObject] = useState(cartTablets)
    const [cartLaptopObject, setCartLaptopObject] = useState(cartLaptops)
    const [cartComputerObject, setCartComputerObject] = useState(cartComputers)
    const [cartOtherObject, setCartOtherObject] = useState(cartOthers)
    const [favPhoneToCart, setFavPhoneToCart] = useState(favPhonesToCart)
    const [favTabletToCart, setFavTabletToCart] = useState(favTabletsToCart)
    const [favLaptopToCart, setFavLaptopToCart] = useState(favLaptopsToCart)
    const [favComputerToCart, setFavComputerToCart] = useState(favComputersToCart)
    const [favOtherToCart, setFavOtherToCart] = useState(favOthersToCart)
    
    
    const handleRemovePhone = (id) =>{
        setCartPhoneObject(cartPhoneObject.filter((item)=> item.id !== id));
        let exactPhone = cartPhoneObject.filter((item)=> item.id === id)
        exactPhone.map((item)=>{
            const index = cartPhones.findIndex(object =>{
                return object.id === item.id
            });
            cartPhones.splice(index, 1);
            console.log(cartPhones)
        })
    }
    const handleRemoveTablet = (id) =>{
            setCartTabletObject(cartTabletObject.filter((item)=> item.id !== id));
            let exactTablet = cartTabletObject.filter((item)=> item.id === id)
            exactTablet.map((item)=>{
                const index = cartTablets.findIndex(object =>{
                return object.id === item.id
                });
                cartTablets.splice(index, 1);
                console.log(cartTablets + " " + index)
            })
    }
    const handleRemoveLaptop = (id) =>{
            setCartLaptopObject(cartLaptopObject.filter((item)=> item.id !== id));
            let exactLaptop = cartLaptopObject.filter((item)=> item.id === id)
            exactLaptop.map((item)=>{
                const index = cartLaptops.findIndex(object =>{
                    return object.id === item.id
                });
                cartLaptops.splice(index, 1);
                console.log(cartLaptops + " " + index)
            })
    }
    const handleRemoveComputer = (id) =>{
            setCartComputerObject(cartComputerObject.filter((item)=> item.id !== id));
            let exactComputer = cartComputerObject.filter((item)=> item.id === id)
            exactComputer.map((item)=>{
                const index = cartComputers.findIndex(object =>{
                    return object.id === item.id
                });
                cartComputers.splice(index, 1);
                console.log(cartComputers + " " + index)
            })
    }
    const handleRemoveOthers = (id) =>{
            setCartOtherObject(cartOtherObject.filter((item)=> item.id !== id));
            let exactOther = cartOtherObject.filter((item)=> item.id === id)
            exactOther.map((item)=>{
                const index = cartOthers.findIndex(object =>{
                    return object.id === item.id
                });
                cartOthers.splice(index, 1);
                console.log(cartOthers )
            })
    }
    const handleRemoveAddedPhone = (id) =>{
        setFavPhoneToCart(favPhoneToCart.filter((item)=> item.id !== id));
        let exactAddedPhone = favPhoneToCart.filter((item)=> item.id === id)
        exactAddedPhone.map((item)=>{
            const index = favPhonesToCart.findIndex(object =>{
            return object.id === item.id
        });
        favPhonesToCart.splice(index, 1);
        console.log(cartComputers + " " + index)
        })
    }
    const handleRemoveAddedTablet = (id) =>{
        setFavTabletToCart(favTabletToCart.filter((item)=> item.id !== id));
        let exactAddedTablet = favTabletToCart.filter((item)=> item.id === id)
        exactAddedTablet.map((item)=>{
            const index = favTabletsToCart.findIndex(object =>{
            return object.id === item.id
        });
        favTabletsToCart.splice(index, 1);
        console.log(cartComputers + " " + index)
        })
    }
    const handleRemoveAddedLaptop = (id) =>{
        setFavLaptopToCart(favLaptopToCart.filter((item)=> item.id !== id));
        let exactAddedLaptop = favLaptopToCart.filter((item)=> item.id === id)
        exactAddedLaptop.map((item)=>{
            const index = favLaptopsToCart.findIndex(object =>{
            return object.id === item.id
        });
        favLaptopsToCart.splice(index, 1);
        console.log(cartComputers + " " + index)
        })
    }
    const handleRemoveAddedComputer = (id) =>{
        setFavComputerToCart(favComputerToCart.filter((item)=> item.id !== id));
        let exactAddedComputer = favComputerToCart.filter((item)=> item.id === id)
        exactAddedComputer.map((item)=>{
            const index = favComputersToCart.findIndex(object =>{
            return object.id === item.id
        });
        favComputersToCart.splice(index, 1);
        console.log(cartComputers + " " + index)
        })
    }
    const handleRemoveAddedOther = (id) =>{
        setFavOtherToCart(favOtherToCart.filter((item)=> item.id !== id));
        let exactAddedOther = favOtherToCart.filter((item)=> item.id === id)
        exactAddedOther.map((item)=>{
            const index = favOthersToCart.findIndex(object =>{
            return object.id === item.id
        });
        favOthersToCart.splice(index, 1);
        console.log(cartComputers + " " + index)
        })
    }
    return(
        <form className="form">
            <ToastContainer/>
            <h1>Your Cart</h1>
            {cartPhoneObject.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemovePhone(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {cartTabletObject.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}}className="btnRemove" type="button" onClick={()=>handleRemoveTablet(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {cartLaptopObject.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}}className="btnRemove" type="button" onClick={()=>handleRemoveLaptop(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {cartComputerObject.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}}className="btnRemove" type="button" onClick={()=>handleRemoveComputer(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {cartOtherObject.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}}className="btnRemove" type="button" onClick={()=>handleRemoveOthers(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {favPhoneToCart.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveAddedPhone(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {favTabletToCart.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveAddedTablet(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {favLaptopToCart.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveAddedLaptop(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {favComputerToCart.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveAddedComputer(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        {favOtherToCart.map((cart)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={cart.img} alt={cart.title}></img></th>
                        <th style={{width: "25%"}}>{cart.title}</th>
                        <th style={{width: "25%"}}>{cart.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveAddedOther(cart.id)}>❌</button>
                            <button className="btn" type="button">Buy</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        </form>
    )
}

export default Cart;