import { useNavigate } from "react-router-dom";
import { computerId } from "../computers";
import { useState } from "react";
const ShowComputers = () =>{
    const navigate = useNavigate();

    const [currentImg, setCurrentImage] = useState(computerId.imgOne);
    let newImage = null;
    const handleImageClickOne = () =>{
        newImage = computerId.imgOne
        setCurrentImage(newImage)
    }
    const handleImageClickTwo = () =>{
        newImage = computerId.imgTwo
        setCurrentImage(newImage)
    }
    const handleImageClickThree = () =>{
        newImage = computerId.imgThree
        setCurrentImage(newImage)
    }
    const handleImageClickFour = () =>{
        newImage = computerId.imgFour
        setCurrentImage(newImage)
    }
    const handleImageClickFive = () =>{
        newImage = computerId.imgFive
        setCurrentImage(newImage)
    }
    
    const handleClickBack = () =>{
        navigate("/homepage/pcs")
    }
    return (
        <>
        <div className="shop">
            <div className="bigcard">
                <img onClick={handleClickBack} className="goBack" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"></img>
                <br/><br/><br/><br/>
                <h1>{computerId.title}</h1>
                <h4>{computerId.type}</h4>
                <img className="pressImg"src={currentImg} alt={computerId.title}></img>
                        <div className="slider">
                            <img onClick={handleImageClickOne} className="navimg" src={computerId.imgOne} alt={computerId.title}></img>
                            <img onClick={handleImageClickTwo} className="navimg"src={computerId.imgTwo} alt={computerId.title}></img>
                            <img onClick={handleImageClickThree} className="navimg"src={computerId.imgThree} alt={computerId.title}></img>
                            <img onClick={handleImageClickFour} className="navimg"src={computerId.imgFour} alt={computerId.title}></img>
                            <img onClick={handleImageClickFive} className="navimg"src={computerId.imgFive} alt={computerId.title}></img>
                        </div>
            
                
            </div>
        </div>
        </>
    )
}

export default ShowComputers;