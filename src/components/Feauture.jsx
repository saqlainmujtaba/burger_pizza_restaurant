import { useNavigate } from "react-router";
import donwloadApp from "../assets/features/App-download.jpg";
import favorites from "../assets/features/favorites-banner.png";
import meal from "../assets/features/kfc-meal.png";
import pickUp from "../assets/features/pickup-banner.png";

import "../styles/components/features.css"

const Feauture = () => {
  const navigate = useNavigate();
  const moveToMenu =()=>{
    navigate("/menu")
  }
  return (
    <>
      <div className="features">
        <div className="pickUp">
          <img src={pickUp}  />
        </div>
        <div className="favorite">
          <img src={favorites}  />
        </div>
        <div className="downloadApp">
          <img src={donwloadApp}  />
        </div>
        <div className="exploreMenuFeature">
          <img src={meal}  />
          <p>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
          <button className="exploreBtn" onClick={moveToMenu}>Explore menu</button>
        </div>
      </div>
    </>
  );
};

export default Feauture;
