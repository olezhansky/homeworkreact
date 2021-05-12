import React, { useState, useEffect } from "react";
import styles from "./Carts.module.scss";
import Cart from "./Cart/Cart";

const Carts = ({ productscart }) => {
  console.log(productscart);
  return (
    <ul className={styles.Products}>
      {productscart.map((product) => {
        return <Cart product={product} />;
      })}
    </ul>
  );
};

export default Carts;
