import { useState } from "react";
import "../componentes/Bag.css";
import CheckoutSteps from "../componentes/Checkoutsteps";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  <CheckoutSteps currentStep={2} />;
  const placeOrder = () => {
    alert(`Order placed using ${paymentMethod.toUpperCase()}`);
  };

  return (
    <div className="payment-page">
      <h2>Payment Method</h2>

      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI / Net Banking
        </label>
      </div>

      <button className="btn-place-order" onClick={placeOrder}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default Payment;
