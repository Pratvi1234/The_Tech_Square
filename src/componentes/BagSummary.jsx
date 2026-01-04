import { Link } from "react-router-dom";

const BagSummary = ({ finalItems = [] }) => {
  const totalItem = finalItems.length;
  const CONVENIENCE_FEES = totalItem > 0 ? 99 : 0;

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    const original = item?.original_price || 0;
    const current = item?.current_price || 0;

    totalMRP += original;
    totalDiscount += original - current;
  });

  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} {totalItem === 1 ? "Item" : "Items"})
        </div>

        <div className="price-item">
          <span>Total MRP</span>
          <span>${totalMRP}</span>
        </div>

        <div className="price-item">
          <span>Discount on MRP</span>
          <span className="priceDetail-base-discount">-${totalDiscount}</span>
        </div>

        <div className="price-item">
          <span>Convenience Fee</span>
          <span>${CONVENIENCE_FEES}</span>
        </div>

        <hr />

        <div className="price-footer">
          <span>Total Amount</span>
          <span>${finalPayment}</span>
        </div>
      </div>

      {totalItem > 0 ? (
        <Link to="/address" className="btn-place-order">
          PLACE ORDER
        </Link>
      ) : (
        <>
          <button className="btn-place-order disabled" disabled>
            PLACE ORDER
          </button>
          <p style={{ textAlign: "center", marginTop: 10, color: "#64748b" }}>
            Your bag is empty. Add items to place an order.
          </p>
        </>
      )}
    </div>
  );
};

export default BagSummary;
