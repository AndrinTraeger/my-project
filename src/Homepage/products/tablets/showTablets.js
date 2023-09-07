import { useContext, useState } from "react";
import { tabletsId } from "../tablets";
import { useNavigate } from "react-router-dom";

const ShowTablets = () =>{
    const navigate = useNavigate();

    console.log(tabletsId)
    const [currentImg, setCurrentImage] = useState(tabletsId.imgOne);
    let newImage = null;
    
    const handleImageClickOne = () =>{
        newImage = tabletsId.imgOne
        setCurrentImage(newImage)
    }
    const handleImageClickTwo = () =>{
        newImage = tabletsId.imgTwo
        setCurrentImage(newImage)
    }
    const handleImageClickThree = () =>{
        newImage = tabletsId.imgThree
        setCurrentImage(newImage)
    }
    const handleImageClickFour = () =>{
        newImage = tabletsId.imgFour
        setCurrentImage(newImage)
    }
    const handleImageClickFive = () =>{
        newImage = tabletsId.imgFive
        setCurrentImage(newImage)
    }
    const handleClickBack = () =>{
        navigate("/homepage/tablets")
    }

    return(
        <>
        <div className="shop">
            <div className="bigcard">
                <img onClick={handleClickBack} className="goBack" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"></img>
                <br/><br/><br/><br/>
                <h1>{tabletsId.title}</h1>
                <h4>{tabletsId.type}</h4>
                <img className="pressImg"src={currentImg} alt={tabletsId.title}></img>
                        <div className="slider">
                            <img onClick={handleImageClickOne} className="navimg" src={tabletsId.imgOne} alt={tabletsId.title}></img>
                            <img onClick={handleImageClickTwo} className="navimg"src={tabletsId.imgTwo} alt={tabletsId.title}></img>
                            <img onClick={handleImageClickThree} className="navimg"src={tabletsId.imgThree} alt={tabletsId.title}></img>
                            <img onClick={handleImageClickFour} className="navimg"src={tabletsId.imgFour} alt={tabletsId.title}></img>
                            <img onClick={handleImageClickFive} className="navimg"src={tabletsId.imgFive} alt={tabletsId.title}></img>
                        </div>
            
                
            </div>
        </div>
        </>
    )
}

export default ShowTablets;