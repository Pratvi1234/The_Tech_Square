import { useState } from "react";
import { Link } from "react-router-dom";
import BagItemContainer from "../componentes/BagItemContainer.jsx";
import BagSummary from "../componentes/BagSummary.jsx";
import CheckoutSteps from "../componentes/Checkoutsteps.jsx";
import "../componentes/Bag.css";

const Bag = () => {
  const items = [
    {
      id: 1,
      company: "Apple",
      item_name: "iPhone 14",
      image: "../images/iphone.jpg",
      original_price: 850,
      current_price: 799,
      discount_percentage: 7,
      return_period: 7,
      delivery_date: "05 Jan",
    },
    {
      id: 2,
      company: "Samsung",
      item_name: "Galaxy S23",
      image: "../images/samsung.jpg",
      original_price: 750,
      current_price: 699,
      discount_percentage: 6.8,
      return_period: 7,
      delivery_date: "06 Jan",
    },
  ];

  const [bagItemsIds, setBagItemsIds] = useState([1, 2]);

  const removeFromBag = (id) => {
    setBagItemsIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const finalItems = items.filter((item) => bagItemsIds.includes(item.id));

  return (
    <main>
      {/* ✅ CHECKOUT PROGRESS */}
      <CheckoutSteps currentStep={0} />
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.length > 0 ? (
            finalItems.map((item) => (
              <BagItemContainer
                key={item.id}
                item={item}
                removeFromBag={removeFromBag}
              />
            ))
          ) : (
            <p className="empty-bag-text">
              Your bag is empty. Add items to see them here.
            </p>
          )}
        </div>

        <BagSummary finalItems={finalItems} />
      </div>
    </main>
  );
};

export default Bag;
