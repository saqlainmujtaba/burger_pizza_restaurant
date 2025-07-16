import { useState } from "react";
import "../styles/components/addBucket.css";
import { toast } from "sonner";
import { FaAngleDown, FaAngleUp, FaWindowClose } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { addToBucket } from "../redux/cartSlice";
import { useNavigate } from "react-router";

const AddBucket = ({ item, onClose }) => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [drinkOpen, setDrinkOpen] = useState(false);
  const [addOnsOpen, setAddOnsOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState(true); // initially open

  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState(null);

  const [shakeModal, setShakeModal] = useState(false);
  const [highlightClose, setHighlightClose] = useState(false);

  const [qty, setQty] = useState(1);
  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => qty > 1 && setQty(qty - 1);

  const addToBucketFunc = (item) => {
    const bucketItem = {
      id: Date.now(), // unique ID
      name: item?.name,
      image: item?.image,
      price: item?.price,
      qty,
      total:
        (item?.price || 0) +
        (selectedDrink?.price || 0) +
        (selectedAddOn?.price || 0),
      drink: selectedDrink,
      addon: selectedAddOn,
    };

    dispatch(addToBucket(bucketItem));
    toast.success(
      `${bucketItem.name} (Rs ${bucketItem.total * qty}) added to bucket`
    );
   navigate("/bucket")
  };

  const drinks = [
    {
      name: "Pepsi Regular",
      price: 180,
      img: "https://www.kfcpakistan.com/images/bf247a00-cb6c-11ef-b7be-17b9ae790a5c-pepsi-2025-01-05135539.png",
    },
    {
      name: "7UP Regular",
      price: 180,
      img: "https://www.kfcpakistan.com/images/62153aa0-0513-11ee-8eee-c7aabf77bad4-7up-2023-06-07091210.png",
    },
    {
      name: "Mountain Dew Regular",
      price: 180,
      img: "https://www.kfcpakistan.com/images/62153aa0-0513-11ee-8eee-c7aabf77bad4-Dew-2023-06-07091210.png",
    },
    {
      name: "Pepsi Zero Sugar",
      price: 180,
      img: "https://www.kfcpakistan.com/images/6ca76220-ccc4-11ef-a442-2753f6458e21-pepsi-2025-01-07065548.png",
    },
  ];
  const iconSize = 28;
  return (
    <>
      <div
        className="bucketOverlay"
        onClick={() => {
          setShakeModal(true);
          setHighlightClose(true);

          setTimeout(() => {
            setShakeModal(false);
            setHighlightClose(false);
          }, 1500); // bounce duration
        }}
      ></div>

      <div className={`addbucket center ${shakeModal ? "bounce" : ""}`}>
        <button
          className={`closeBtn ${highlightClose ? "highlight" : ""}`}
          onClick={onClose}
        >
          <FaWindowClose />
        </button>

        <div className="bucketLeft">
          <div className="section">
            <div
              className="dropdownHeader"
              onClick={() => setOptionOpen(!optionOpen)}
            >
              <span>Choose an option</span>
              <span className="arrow">
                {optionOpen ? (
                  <FaAngleUp size={iconSize} />
                ) : (
                  <FaAngleDown size={iconSize} />
                )}
              </span>
            </div>

            {optionOpen && (
              <div className="optionList">
                <div className="optionItem selected">
                  <input type="radio" checked readOnly />
                  <span>{item?.name}</span>
                  <span className="price">+Rs {item?.price}</span>
                </div>
              </div>
            )}
          </div>

          <div className="section">
            <div
              className="dropdownHeader"
              onClick={() => setDrinkOpen(!drinkOpen)}
            >
              Drink <span>(Optional)</span>
              <span className="arrow">
                {drinkOpen ? (
                  <FaAngleUp size={iconSize} />
                ) : (
                  <FaAngleDown size={iconSize} />
                )}
              </span>
            </div>
            {drinkOpen && (
              <div className={`dropdownContent ${drinkOpen ? "open" : ""}`}>
                {drinks.map((drink, index) => (
                  <div className="drinkItem" key={index}>
                    <img src={drink.img} alt={drink.name} />
                    <span>{drink.name}</span>
                    <span>+Rs {drink.price}</span>
                    <button
                      className={
                        selectedDrink?.name == drink.name && "selected"
                      }
                      onClick={() => {
                        selectedDrink?.name == drink.name
                          ? setSelectedDrink(null)
                          : setSelectedDrink(drink);
                      }}
                    >
                      {selectedDrink?.name == drink.name ? "Remove" : "Add"}{" "}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="section thirdSection">
            <div
              className="dropdownHeader"
              onClick={() => setAddOnsOpen(!addOnsOpen)}
            >
              Add Ons <span>(Optional)</span>
              <span className="arrow">
                {addOnsOpen ? (
                  <FaAngleUp size={iconSize} />
                ) : (
                  <FaAngleDown size={iconSize} />
                )}
              </span>
            </div>
            {addOnsOpen && (
              <div className={`dropdownContent ${addOnsOpen ? "open" : ""}`}>
                <div className="drinkItem">
                  <img
                    src="https://www.kfcpakistan.com/images/dd4a34d0-ea4e-11ed-830c-4fa21ffc6c4a-ches-2023-05-04073955.png"
                    alt="Cheese"
                  />
                  <span>Cheese Slice</span>
                  <span>+Rs 50</span>
                  <button
                    className={
                      selectedAddOn?.name === "Cheese Slice" ? "selected" : ""
                    }
                    onClick={() =>
                      selectedAddOn?.name == "Cheese Slice"
                        ? setSelectedAddOn(null)
                        : setSelectedAddOn({
                            name: "Cheese Slice",
                            price: 50,
                          })
                    }
                  >
                    {selectedAddOn?.name == "Cheese Slice" ? "Remove" : "Add"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bucketRight">
          <img src={item?.image} alt={item?.name} />
          <h2>{item?.name}</h2>
          <p>
            Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed
            bun
          </p>

          {selectedDrink && (
            <p className="subItem">
              + {selectedDrink.name} <span>(Rs {selectedDrink.price})</span>
            </p>
          )}

          {selectedAddOn && (
            <p className="subItem">
              + {selectedAddOn.name} <span>(Rs {selectedAddOn.price})</span>
            </p>
          )}
          <div className="quantity">
            <button onClick={decreaseQty}>-</button>
            <span>{qty}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          <button
            className="addBtn"
           onClick={() => addToBucketFunc(item)}

          >
            <div className="priceControl">
              <h5>
                Rs.
                {(item?.price +
                  (selectedDrink?.price || 0) +
                  (selectedAddOn?.price || 0)) *
                  qty}
              </h5>
              <h5>ADD TO BUCKET</h5>
            </div>
            <span className="arrowIcon">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBucket;
