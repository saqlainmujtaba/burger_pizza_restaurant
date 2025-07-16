import { toast } from "sonner";
import Header from "../components/Header";
import OrderDetails from "../components/OrderDetails";
import "../styles/pages/checkout.css";
import { useEffect, useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import Confetti from "react-confetti";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSafeWindowSize } from "../hooks/useSafeWindowSize";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paid, setPaid] = useState(false);
const [width, height] = useSafeWindowSize();
  const [showConfetti, setShowConfetti] = useState(false); // show on load

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    setPaid(true);
    setShowConfetti(true);
    // Simulate payment logic here (replace with real API call later)
    toast.success(`Proceeding with payment via ${selectedPayment}`);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // stop after 5 seconds
    }, 500);

    return () => clearTimeout(timer); // clean up
  }, [paid]);

const orderNumber = `UM-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <>
      <Header />
      <div className="checkoutwrapper">
        <div className="checkout">
          {!paid ? (
            <>
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
            </>
          ) : (
            <>
              <div className="orderSuccess">
              
                <Confetti
                  width={width}
                  height={height}
                  recycle={showConfetti} // true = generate continuously, false = stop
                  numberOfPieces={300} // good starting amount
                  gravity={0.4} // make it fall downward
                  wind={0.01} // optional wind effect
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <GrStatusGood className="paidIcon" size={48} />
                </motion.div>
                <div className="text">

                <h3>Order Placed Succesfully</h3>
                <p>Our sale executive contact you soon.</p>
                <h3>Thank you for your order.</h3>
                <h3>Your order # is {orderNumber}</h3>
                </div>
              </div>
            </>
          )}

          <OrderDetails />
        </div>
      </div>
    </>
  );
};

export default Checkout;
