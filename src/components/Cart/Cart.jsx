import React, { useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import cartEmpty from "../../img/emptyCart.png";

const Cart = ({ products, onClick }) => {
  return (
    <>
      {!products.length && (
        <div className={styles.Header}>
          <h2 className={styles.Title}>Cart empty!</h2>
          <img src={cartEmpty} />
        </div>
      )}
      <ul className={styles.Products}>
        {products.map((product, index) => {
          return (
            <CartProduct product={product} key={index} onClick={onClick} />
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
