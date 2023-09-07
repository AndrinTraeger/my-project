import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { othersId } from "../others";
const ShowOthers = () =>{
    const navigate = useNavigate();

    const [currentImg, setCurrentImage] = useState(othersId.imgOne);
    let newImage = null;
    const handleImageClickOne = () =>{
        newImage = othersId.imgOne
        setCurrentImage(newImage)
    }
    const handleImageClickTwo = () =>{
        newImage = othersId.imgTwo
        setCurrentImage(newImage)
    }
    const handleImageClickThree = () =>{
        newImage = othersId.imgThree
        setCurrentImage(newImage)
    }
    const handleImageClickFour = () =>{
        newImage = othersId.imgFour
        setCurrentImage(newImage)
    }
    const handleImageClickFive = () =>{
        newImage = othersId.imgFive
        setCurrentImage(newImage)
    }
    
    const handleClickBack = () =>{
        navigate("/homepage/others")
    }
    return(
        <>
        <div className="shop">
            <div className="bigcard">
                <img onClick={handleClickBack} className="goBack" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"></img>
                <br/><br/><br/><br/>
                <h1>{othersId.title}</h1>
                <h4>{othersId.type}</h4>
                <img className="pressImg"src={currentImg} alt={othersId.title}></img>
                        <div className="slider">
                            <img onClick={handleImageClickOne} className="navimg" src={othersId.imgOne} alt={othersId.title}></img>
                            <img onClick={handleImageClickTwo} className="navimg"src={othersId.imgTwo} alt={othersId.title}></img>
                            <img onClick={handleImageClickThree} className="navimg"src={othersId.imgThree} alt={othersId.title}></img>
                            <img onClick={handleImageClickFour} className="navimg"src={othersId.imgFour} alt={othersId.title}></img>
                            <img onClick={handleImageClickFive} className="navimg"src={othersId.imgFive} alt={othersId.title}></img>
                        </div>
            
                
            </div>
        </div>
        
    
        </>
    )
}

export default ShowOthers