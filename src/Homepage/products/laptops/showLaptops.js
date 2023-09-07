import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { laptopId } from "../laptops";
const ShowLaptops = () =>{

    const navigate = useNavigate();

    const [currentImg, setCurrentImage] = useState(laptopId.imgOne);
    let newImage = null;
    const handleImageClickOne = () =>{
        newImage = laptopId.imgOne
        setCurrentImage(newImage)
    }
    const handleImageClickTwo = () =>{
        newImage = laptopId.imgTwo
        setCurrentImage(newImage)
    }
    const handleImageClickThree = () =>{
        newImage = laptopId.imgThree
        setCurrentImage(newImage)
    }
    const handleImageClickFour = () =>{
        newImage = laptopId.imgFour
        setCurrentImage(newImage)
    }
    const handleImageClickFive = () =>{
        newImage = laptopId.imgFive
        setCurrentImage(newImage)
    }
    
    const handleClickBack = () =>{
        navigate("/homepage/laptops")
    }

return(
    <>
    <div className="shop">
            <div className="bigcard">
                <img onClick={handleClickBack} className="goBack" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back"></img>
                <br/><br/><br/><br/>
                <h1>{laptopId.title}</h1>
                <h4>{laptopId.type}</h4>
                <img className="pressImg"src={currentImg} alt={laptopId.title}></img>
                        <div className="slider">
                            <img onClick={handleImageClickOne} className="navimg" src={laptopId.imgOne} alt={laptopId.title}></img>
                            <img onClick={handleImageClickTwo} className="navimg"src={laptopId.imgTwo} alt={laptopId.title}></img>
                            <img onClick={handleImageClickThree} className="navimg"src={laptopId.imgThree} alt={laptopId.title}></img>
                            <img onClick={handleImageClickFour} className="navimg"src={laptopId.imgFour} alt={laptopId.title}></img>
                            <img onClick={handleImageClickFive} className="navimg"src={laptopId.imgFive} alt={laptopId.title}></img>
                        </div>
            
                
            </div>
        </div>
    </>
)

}
export default ShowLaptops