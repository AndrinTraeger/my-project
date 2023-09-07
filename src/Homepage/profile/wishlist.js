import "./userinfo.css"
import { useContext } from "react";
import { UserContext } from "../../App";
import { favPhones } from "../homepage";
import { useState } from "react";
import { favTablets } from "../products/tablets";
import { favLaptops } from "../products/laptops";
import { favComputers } from "../products/computers";
import { favOthers } from "../products/others";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { dataId } from "../homepage";

export let favPhonesToCart = []
export let favTabletsToCart = []
export let favLaptopsToCart = []
export let favComputersToCart = []
export let favOthersToCart = []
let datId = dataId;

const Wishlist = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);
    const [favPhone, setFavPhone] = useState(favPhones);
    const [favTablet, setFavTablet] = useState(favTablets);
    const [favLaptop, setFavLaptop] = useState(favLaptops)
    const [favComputer, setFavComputer] = useState(favComputers);
    const [favOther, setFavOther] = useState(favOthers);

    const handleRemovePhone = (id) =>{
        setFavPhone(favPhone.filter((item)=> item.id !== id));
        let exactPhone = favPhone.filter((item)=> item.id === id)
        exactPhone.map((item)=>{
            const index = favPhones.findIndex(object =>{
                return object.id === item.id
            });
            console.log(index)
            favPhones.splice(index, 1);
            console.log(favPhones)
        })
        }
        
        const handleRemoveTablet = (id) =>{
            setFavTablet(favTablet.filter((item)=> item.id !== id));
            let exactTablet = favTablet.filter((item)=> item.id === id)
            exactTablet.map((item)=>{
                const index = favTablets.findIndex(object =>{
                return object.id === item.id
                });
                favTablets.splice(index, 1);
                console.log(favTablets + " " + index)
            })
            }

        const handleRemoveLaptop = (id) =>{
            setFavLaptop(favLaptop.filter((item)=> item.id !== id));
            let exactLaptop = favLaptop.filter((item)=> item.id === id)
            exactLaptop.map((item)=>{
                const index = favLaptops.findIndex(object =>{
                return object.id === item.id
                });
                favLaptops.splice(index, 1);
                console.log(favTablets + " " + index)
            })
            }
        const handleRemoveComputer = (id) =>{
                setFavComputer(favComputer.filter((item)=> item.id !== id));
                let exactComputer = favComputer.filter((item)=> item.id === id)
                exactComputer.map((item)=>{
                    const index = favComputers.findIndex(object =>{
                        return object.id === item.id
                    });
                    console.log(index)
                    favComputers.splice(index, 1);
                    console.log(favPhones)
            })
            }
        
            const handleRemoveOther = (id) =>{
                setFavOther(favOther.filter((item)=> item.id !== id));
                let exactOther = favOther.filter((item)=> item.id === id)
                exactOther.map((item)=>{
                    const index = favOthers.findIndex(object =>{
                        return object.id === item.id
                    });
                    console.log(index)
                    favOthers.splice(index, 1);
                    console.log(favPhones)
                })
                }
                
        const handleCartPhone = (id) =>{
            const exactPhone = favPhone.filter((item)=> item.id === id);
            exactPhone.map((item)=>{
                toast(`${item.title} has been added to your cart 👍`)
                favPhonesToCart = [...favPhonesToCart, item]
            })
            console.log(favPhonesToCart);
            setFavPhone(favPhone.filter((item)=> item.id !== id));
            let exactPhoneDelete = favPhone.filter((item)=> item.id === id)
            exactPhoneDelete.map((item)=>{
            const index = favPhones.findIndex(object =>{
            return object.id === item.id
            });
            console.log(index)
            favPhones.splice(index, 1);
            console.log(favPhones)
        })
        }


        const handleCartTablets = (id) =>{
        const exactTablet = favTablet.filter((item)=> item.id === id);
        exactTablet.map((item)=>{
        toast(`${item.title} has been added to your cart 👍`)
        favTabletsToCart = [...favTabletsToCart, item]
        })
        console.log(favTabletsToCart);
        setFavTablet(favTablet.filter((item)=> item.id !== id));
        let exactTabletDelete = favTablet.filter((item)=> item.id === id)
        exactTabletDelete.map((item)=>{
        const index = favTablets.findIndex(object =>{
        return object.id === item.id
        });
        console.log(index)
        favTablets.splice(index, 1);
        console.log(favTablets)
        })
        }
        const handleCartLaptop = (id) =>{
            const exactLaptop = favLaptop.filter((item)=> item.id === id);
            exactLaptop.map((item)=>{
                toast(`${item.title} has been added to your cart 👍`)
                favLaptopsToCart = [...favLaptopsToCart, item]
            })
            console.log(favLaptopsToCart);
            setFavLaptop(favLaptop.filter((item)=> item.id !== id));
            let exactLaptopDelete = favLaptop.filter((item)=> item.id === id)
            exactLaptopDelete.map((item)=>{
            const index = favLaptops.findIndex(object =>{
            return object.id === item.id
            });
            console.log(index)
            favLaptops.splice(index, 1);
            console.log(favPhones)
        })
        }
        const handleCartComputer = (id) =>{
            const exactComputer = favComputer.filter((item)=> item.id === id);
            exactComputer.map((item)=>{
                toast(`${item.title} has been added to your cart 👍`)
                favComputersToCart = [...favComputersToCart, item]
            })
            console.log(favComputersToCart);
            setFavComputer(favComputer.filter((item)=> item.id !== id));
            let exactComputerDelete = favPhone.filter((item)=> item.id === id)
            exactComputerDelete.map((item)=>{
            const index = favComputers.findIndex(object =>{
            return object.id === item.id
            });
            console.log(index)
            favComputers.splice(index, 1);
            console.log(favComputers)
        })
        }
        const handleCartOther = (id) =>{
            const exactOther = favOther.filter((item)=> item.id === id);
            exactOther.map((item)=>{
                toast(`${item.title} has been added to your cart 👍`)
                favOthersToCart = [...favOthersToCart, item]
            })
            console.log(favOthersToCart);
            setFavOther(favOther.filter((item)=> item.id !== id));
            let exactOtherDelete = favOther.filter((item)=> item.id === id)
            exactOtherDelete.map((item)=>{
            const index = favOthers.findIndex(object =>{
            return object.id === item.id
            });
            console.log(index)
            favOthers.splice(index, 1);
            console.log(favOthers)
        })
        }
                
        

    return(
        <>
        <ToastContainer/>
        <form className="form">
            <h1>Your Wishlist</h1>
        {favPhone.map((fav)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={fav.img} alt={fav.title}></img></th>
                        <th style={{width: "25%"}}>{fav.title}</th>
                        <th style={{width: "25%"}}>{fav.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemovePhone(fav.id)}>❌</button>
                            <button className="btn" type="button" onClick={()=> handleCartPhone(fav.id)}>Add to Cart</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}

        {favTablet.map((fav)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={fav.img} alt={fav.title}></img></th>
                        <th style={{width: "25%"}}>{fav.title}</th>
                        <th style={{width: "25%"}}>{fav.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveTablet(fav.id)}>❌</button>
                            <button className="btn" type="button" onClick={()=> handleCartTablets(fav.id)}>Add to Cart</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}

        {favLaptop.map((fav)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={fav.img} alt={fav.title}></img></th>
                        <th style={{width: "25%"}}>{fav.title}</th>
                        <th style={{width: "25%"}}>{fav.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveLaptop(fav.id)}>❌</button>
                            <button className="btn" type="button" onClick={()=> handleCartLaptop(fav.id)}>Add to Cart</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}

    {favComputer.map((fav)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={fav.img} alt={fav.title}></img></th>
                        <th style={{width: "25%"}}>{fav.title}</th>
                        <th style={{width: "25%"}}>{fav.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveComputer(fav.id)}>❌</button>
                            <button className="btn" type="button" onClick={()=>handleCartComputer(fav.id)}>Add to Cart</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}

    {favOther.map((fav)=>{
            return(
            <div style={{display: "flex"}}>
                <table className="styled-table">
                    <thead>
                        <th style={{width: "25%"}}><img style={{width: "64px"}}src={fav.img} alt={fav.title}></img></th>
                        <th style={{width: "25%"}}>{fav.title}</th>
                        <th style={{width: "25%"}}>{fav.price} CHF.-</th>
                        <th style={{width: "25%"}}>
                            <button style={{margin: "5%"}} className="btnRemove" type="button" onClick={()=>handleRemoveOther(fav.id)}>❌</button>
                            <button className="btn" type="button" onClick={()=> handleCartOther(fav.id)}>Add to Cart</button>
                        </th>  
                    </thead>
                </table>
            </div>
            )   
        })}
        </form>
        </>
    )
}

export default Wishlist;