import React from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    
    navigate("/summary");
  };

  return (
    <div>
      <h2>Order Page</h2>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderPage;