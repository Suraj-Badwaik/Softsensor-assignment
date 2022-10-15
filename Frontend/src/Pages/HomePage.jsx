import React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { GetAllData } from "../Redux/action";
import styles from "../Style/Product.module.css";

const Homepage = () => {
  const { products, loading, error } = useSelector((state) => state);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const observer = useRef();

  // Infinite scroll logic ========================================================

  const onScroll = () => {
    if (observer.current) {
      const { scrollTop, scrollHeight, clientHeight } = observer.current;

      if (Math.floor(scrollTop + clientHeight) === Math.floor(scrollHeight)) {
        setPage((prev) => prev + 1);
      }
    }
  };
  // =============================================================================================

  useEffect(() => {
    dispatch(GetAllData(page));
  }, [page]);

  return (
    <div
      className={`${styles.GridContainer} ${styles.GridContainer_dark}`}
      onScroll={onScroll}
      ref={observer}
      style={{ height: "105vh", overflowY: "scroll" }}
    >
      {products.length > 0 &&
        products.map((item, index) => {
          return (
            <div key={index}>
              <Card {...item} />
            </div>
          );
        })}
      <div className={styles.loading}>
        {loading && (
          <img src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif" />
        )}
      </div>
      <div>{error && "404 Not Found"}</div>
    </div>
  );
};

export default Homepage;
