import promotion from "../assets/Promotion.png";
import midnight from "../assets/midnight.png";
import sharing from "../assets/sharing.png";
import allCartCombos from "../assets/Ala Carte Combos.png";
import everydayValue from "../assets/everyday value.png";
import signatureBoxes from "../assets/signature boxes.png";
import snacksBeverages from "../assets/Snacks beverages.png";

import "../styles/components/exploreMenu.css";

const ExploreMenu = () => {
  return (
    <>
      <div className="exploreMenu">
        <h1>Explore Menu</h1>
        <div className="emcards">
          <div className="emcard">
            <img src={promotion} alt="" />
            <h2 className="title">Promotion</h2>
          </div>
          <div className="emcard">
            <img src={midnight} alt="" />
            <h2 className="title">Mid Night Deals</h2>
          </div>
          <div className="emcard">
            <img src={sharing} alt="" />
            <h2 className="title">Sharing</h2>
          </div>
          <div className="emcard">
            <img src={allCartCombos} alt="" />
            <h2 className="title">All Cart Combos</h2>
          </div>
          <div className="emcard">
            <img src={everydayValue} alt="" />
            <h2 className="title">Everyday Value</h2>
          </div>
          <div className="emcard">
            <img src={signatureBoxes} alt="" />
            <h2 className="title">Signature Boxes</h2>
          </div>
          <div className="emcard">
            <img src={snacksBeverages} alt="" />
            <h2 className="title">Snacks & Beverage</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;
