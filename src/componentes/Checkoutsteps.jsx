import React from "react";
import "../componentes/Bag.css"; // assuming styles are here

const CheckoutSteps = ({ currentStep }) => {
  const steps = ["Bag", "Address", "Payment"];

  return (
    <div className="checkout-steps">
      {steps.map((step, index) => (
        <span key={index} className={currentStep === index ? "active" : ""}>
          {step}
          {index < steps.length - 1 && " → "}
        </span>
      ))}
    </div>
  );
};

export default CheckoutSteps;
