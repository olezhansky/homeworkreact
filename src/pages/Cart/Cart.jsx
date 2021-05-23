import React from "react";
import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import cartEmpty from "../../img/emptyCart.png";
import PropTypes from "prop-types";

const Cart = ({ products, onClick }) => {
  console.log(products);
  return (
    <>
      {!products.length && (
        <div className={styles.Header}>
          <h2 className={styles.Title}>Cart empty!</h2>
          <img src={cartEmpty} alt="img" />
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

Cart.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
};

export default Cart;
