import { useState } from "react";
import chickChips from "../assets/bestsellers/chickChips.png";
import hotWingsBucket from "../assets/bestsellers/hotWingsBucket.png";
import krunch from "../assets/bestsellers/krunch.png";
import krunchCombo from "../assets/bestsellers/krunchCombo.png";
import mightyZinger from "../assets/bestsellers/mightyZinger.png";

import "../styles/components/bestSeller.css";
import AddBucket from "./AddBucket"; // Import your component

const BestSellers = () => {
  const [showBucket, setShowBucket] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const bestSellers = [
    {
      name: "Krunch Burger",
      price: 631,
      image: krunch,
    },
    {
      name: "Krunch Combo",
      price: 630,
      image: krunchCombo,
    },
    {
      name: "Chick & Chips",
      price: 630,
      image: chickChips,
    },
    {
      name: "Hot Wings Bucket",
      price: 630,
      image: hotWingsBucket,
    },
    {
      name: "Mighty Zinger",
      price: 630,
      image: mightyZinger,
    },
  ];

  const handleClick = (item) => {
   
    setSelectedItem(item);
    setShowBucket(true);
  };

  return (
    <>
      <div className="bestSellers">
        <h1>Best Sellers</h1>
        <div className="bsItems">
          {bestSellers.map((item, idx) => (
            <div key={idx} className="bsItem" onClick={() => handleClick(item)}>
              <div className="bsTitle">
                <h2>{item.name}</h2>
              </div>
              <div className="price">
                <h3>
                  Rs.<strong>{item.price}</strong>
                </h3>
              </div>
              <div className="bsImage">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showBucket && (
        <AddBucket
          item={selectedItem}
          onClose={() => setShowBucket(false)}
        />
      )}
    </>
  );
};

export default BestSellers;
