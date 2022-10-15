import React from "react";
import styles from "../Style/Navbar.module.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Main}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img
            src="https://i.postimg.cc/XvZXXCLw/logo-e-commerce.jpg"
            alt="logo"
          />
        </div>
        <div className={styles.NavOptions}>
          <ul>
            <li>Mens</li>
            <li>Womens</li>
            <li>All Categories</li>
            <li>Special Offers</li>
          </ul>
        </div>
        <button className={styles.cartBtn} onClick={() => navigate("/cart")}>
          <TfiShoppingCart />
        </button>
      </div>
      <div className={styles.Separator}></div>
    </div>
  );
};

export default Navbar;
