import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { addToBucket } from "../redux/cartSlice";
import { useState } from "react";
import AddBucket from "./AddBucket";
import "../styles/components/topDeals.css";


const MenuItem = ({ deal }) => {
  const dispatch = useDispatch();
  const [showBucket, setShowBucket] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowBucket(true);
  };

  const handleAddToBucket = (deal) => {
    const item = {
      id: deal.name, // Using name as ID for uniqueness here
      name: deal.name,
      image: deal.image,
      price: deal.price,
      qty: 1,
      total: deal.price,
      drink: null,
      addon: null,
    };

    dispatch(addToBucket(item));
    toast.success(`${item.name} added to bucket!`);
  };
  return (
    <>
      <div className="tdItem">
        <div className="display" onClick={() => handleClick(deal)}>
          <div className="tdImage">
            <img src={deal.image} alt={deal.name} />
          </div>
          <div className="tdTitle">
            <h2>{deal.name}</h2>
          </div>
          <div className="tdDescription">
            <p>{deal.description}</p>
          </div>
          <div className="tdPrice">
            <h3>
              Rs. <strong>{deal.price}</strong>
            </h3>
          </div>
        </div>
        <div className="addToBucket" onClick={() => handleAddToBucket(deal)}>
          <p>
            <span className="plus">+</span> <strong>Add to Bucket</strong>
          </p>
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

export default MenuItem;
