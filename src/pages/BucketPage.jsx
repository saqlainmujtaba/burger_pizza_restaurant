import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import { TbCreditCardPay } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Header from "../components/Header";
import { decreaseQty, increaseQty, removeItem } from "../redux/cartSlice.js";

import "../styles/pages/bucketPage.css";

const BucketPage = () => {
  const bucketItems = useSelector((state) => state.cart.bucketItems);
  const dispatch = useDispatch();

  // const subTotal = bucketItems.reduce(
  //   (sum, item) => sum + item.total * item.qty,
  //   0
  // );
  const extractPrice = (priceString) => {
    if (typeof priceString === "number") return priceString;
    if (typeof priceString === "string") {
      const number = priceString.replace(/[^\d.]/g, ""); // Remove everything except digits and dot
      return parseFloat(number); // Convert to number
    }
    return 0;
  };
  const subTotal = bucketItems.reduce((sum, item) => {
    const itemPrice = extractPrice(item.total); // or extractPrice(item.price)
    return sum + itemPrice * item.qty;
  }, 0);

  const gst = subTotal > 1000 ? 0 : subTotal !== 0 ? 50 : 0;
  const total = subTotal + gst;

  const navigate = useNavigate();
  const moveToMenu = () => {
    navigate("/menu");
  };
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <Header />
      <div className="bucketWrapper">
        <div className="bucketContent ">
          <div className="leftColumn">
            <div className="cartCard">
              <h2>
                <i className="cartIcon">🛒</i> Items From Your Cart
              </h2>

              {bucketItems.length === 0 ? (
                <>
                  <img
                    src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
                    alt="empty cart"
                  />
                  <p>You haven’t added any items in bucket yet</p>
                  <button className="exploreBtn" onClick={() => moveToMenu()}>
                    EXPLORE MENU
                  </button>
                </>
              ) : (
                bucketItems.map((item) => (
                  <div key={item.id} className="bucketItemRow">
                    <div className="itemInfo">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        {item.drink && (
                          <p>
                            + {item.drink.name} (Rs {item.drink.price})
                          </p>
                        )}
                        {item.addon && (
                          <p>
                            + {item.addon.name} (Rs {item.addon.price})
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="itemActions">
                      <span className="price">
                        Rs. {extractPrice(item.total) * item.qty}
                      </span>
                      <div className="qtyControl">
                        {item.qty > 1 ? (
                          <button
                            onClick={() => dispatch(decreaseQty(item.id))}
                          >
                            <TiMinus />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              dispatch(removeItem(item.id));
                              toast.error(`${item.name} removed from bucket`);
                            }}
                          >
                            <RiDeleteBin6Line />
                          </button>
                        )}
                        <span>{item.qty}</span>
                        <button onClick={() => dispatch(increaseQty(item.id))}>
                          <TiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rightColumn">
            <div>
              <h3 className="orderDetails">Order Details</h3>
              <div className="spacialInstructions">
                <label>Special Instructions (Optional)</label>
                <textarea placeholder="Add Cooking / Delivery Instructions (Optional)" />

                <label>Alternate Phone Number (03XXXXXXXXX)</label>
                <input type="text" placeholder="03123465789" />
              </div>

              <div className="orderSummary">
                <h4>Your Order</h4>
                {bucketItems.length === 0 ? (
                  <p>No items yet</p>
                ) : (
                  bucketItems.map((item) => (
                    <div key={item.id} className="summaryItem">
                      <h5>
                        {item.name}
                        {item.drink && ` + ${item.drink.name}`}
                        {item.addon && ` + ${item.addon.name}`}
                      </h5>
                      <h6>
                        ({item.qty}×Rs {item.total}) Rs{" "}
                        {extractPrice(item.total) * item.qty}
                      </h6>
                    </div>
                  ))
                )}
                <div className="subTotal">
                  <h5>Sub Total:</h5> <h6>Rs. {subTotal}</h6>
                </div>
                <div>
                  <h5>Delivery Charges:</h5> <h6>Rs. {gst}</h6>
                </div>
                <div className="total">
                  <h5>Total:</h5> <h6>Rs. {total}</h6>
                </div>
              </div>
            </div>
            <div className="checkoutBar">
              <span>
                {" "}
                {bucketItems.length} {bucketItems.length > 1 ? "Items" : "Item"}{" "}
                | Rs.{total}
              </span>
              <button className="checkoutbtn" onClick={handleClick}>
                {" "}
                Checkout <TbCreditCardPay size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BucketPage;
