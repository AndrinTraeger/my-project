import { useContext, useState } from "react";
import { UserContext } from "../App";
import { dataId } from "./homepage";
import { useNavigate } from "react-router-dom";
import "./showProduct.css"
const ShowProduct = () =>{
    const navigate = useNavigate();

    const [currentImg, setCurrentImage] = useState(dataId.imgOne);
    let newImage = null;
    const handleImageClickOne = () =>{
        newImage = dataId.imgOne
        setCurrentImage(newImage)
    }
    const handleImageClickTwo = () =>{
        newImage = dataId.imgTwo
        setCurrentImage(newImage)
    }
    const handleImageClickThree = () =>{
        newImage = dataId.imgThree
        setCurrentImage(newImage)
    }
    const handleImageClickFour = () =>{
        newImage = dataId.imgFour
        setCurrentImage(newImage)
    }
    const handleImageClickFive = () =>{
        newImage = dataId.imgFive
        setCurrentImage(newImage)
    }
    
    const handleClickBack = () =>{
        navigate("/homepage")
    }
    
    return(
        <>
        <div className="shop">
            <div className="bigcard">
                <img onClick={handleClickBack} className="goBack" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"></img>
                <br/><br/><br/><br/>
                <h1>{dataId.title}</h1>
                <h4>{dataId.type}</h4>
                <img className="pressImg"src={currentImg} alt={dataId.title}></img>
                        <div className="slider">
                            <img onClick={handleImageClickOne} className="navimg" src={dataId.imgOne} alt={dataId.title}></img>
                            <img onClick={handleImageClickTwo} className="navimg"src={dataId.imgTwo} alt={dataId.title}></img>
                            <img onClick={handleImageClickThree} className="navimg"src={dataId.imgThree} alt={dataId.title}></img>
                            <img onClick={handleImageClickFour} className="navimg"src={dataId.imgFour} alt={dataId.title}></img>
                            <img onClick={handleImageClickFive} className="navimg"src={dataId.imgFive} alt={dataId.title}></img>
                        </div>
                {dataId.description}
                {dataId.specification}
                
            </div>
        </div>
        
    
        </>
    )
}

export default ShowProduct;