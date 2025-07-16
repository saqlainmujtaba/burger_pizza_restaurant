import Header from "../components/Header";
import OrderDetails from "../components/OrderDetails";
import "../styles/pages/checkout.css";
import { useState } from "react";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }

    // Simulate payment logic here (replace with real API call later)
    alert(`Proceeding with payment via ${selectedPayment}`);
  };

  return (
    <>
      <Header />
      <div className="checkoutwrapper">
        <div className="checkout">
          <div className="payOptions">
            <h3>Choose a Payment Method</h3>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="JazzCash"
                  onChange={handlePaymentChange}
                />
                JazzCash
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="EasyPaisa"
                  onChange={handlePaymentChange}
                />
                EasyPaisa
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="BankTransfer"
                  onChange={handlePaymentChange}
                />
                Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="CashOnDelivery"
                  onChange={handlePaymentChange}
                />
                Cash on Delivery
              </label>
            </div>
            <button onClick={handleSubmit}>Confirm & Pay</button>
          </div>
          <OrderDetails />
        </div>
      </div>
    </>
  );
};

export default Checkout;
