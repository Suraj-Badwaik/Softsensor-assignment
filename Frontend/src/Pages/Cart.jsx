import React from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const btnStyle = {
    backgroundColor: "red",
    padding: "5px 20px",
    borderRadius: "6px",
    border: "2px solid red",
    display: "flex",
    float: "left",
    marginLeft: "50px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <button style={btnStyle} onClick={handleNavigate}>
        <HiArrowNarrowLeft style={{ marginRight: "10px" }} /> Back
      </button>
      {cart?.length > 0 &&
        cart.map((el) => {
          return <Card key={el.id} {...el} />;
        })}
    </div>
  );
};

export default Cart;
