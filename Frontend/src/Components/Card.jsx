import React from "react";
import styles from "../Style/Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MoveToCart } from "../Redux/action";

const Card = (data) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCart = () => {
    dispatch(MoveToCart(data));
    alert("added to cart");
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  return (
    <div className={styles.mainCard}>
      <p className={styles.category}>{data.category}</p>
      <div className={styles.Image_container}>
        <img src={data.image} alt="product-image" />
      </div>
      <p className={styles.title}>{data.title}</p>
      <div className={styles.rating}>
        <p>{data.rating.rate}</p>
      </div>
      <p className={styles.desc}>{data.description}</p>
      <p className={styles.price}>Price : $ {data.price} </p>
      <button className={styles.cartbtn} onClick={handleCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
