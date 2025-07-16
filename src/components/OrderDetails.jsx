import { useDispatch, useSelector } from "react-redux";
import { TbCreditCardPay } from "react-icons/tb";
import "../styles/components/OrderDetails.css";
import { useNavigate } from "react-router";

const OrderDetails = () => {
  const bucketItems = useSelector((state) => state.cart.bucketItems);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Utility function to extract number from price string
  // const subTotal = bucketItems.reduce(
    //   (sum, item) => sum + item.total * item.qty,
    //   0
    // );
    // const extractPrice = (priceString) => {
    //   const number = priceString.replace(/[^\d.]/g, ""); // Remove everything except digits and dot
    //   return parseFloat(number); // Convert to number
    // };
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
 
  const handleClick = ()=>{
    navigate("/checkout")
  }
  return (
    <>
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
                    ({item.qty}× {item.total}) Rs {extractPrice(item.total) * item.qty}
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
            {bucketItems.length} {bucketItems.length > 1 ? "Items" : "Item"} |
            Rs.{total}
          </span>
          <button className="checkoutbtn" onClick={handleClick}>Checkout <TbCreditCardPay size={28}  /></button>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
