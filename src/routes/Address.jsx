import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentes/Bag.css";
import CheckoutSteps from "../componentes/Checkoutsteps";

const Address = () => {
  const navigate = useNavigate();
  <CheckoutSteps currentStep={1} />;
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="address-page">
      <h2>Delivery Address</h2>

      <form className="address-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name (optional)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number (optional)"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address (optional)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City (optional)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State (optional)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode (optional)"
          onChange={handleChange}
        />

        <button type="submit" className="btn-next">
          CONTINUE TO PAYMENT
        </button>
      </form>
    </div>
  );
};

export default Address;
