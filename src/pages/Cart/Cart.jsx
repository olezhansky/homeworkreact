import React, { useState } from "react";
import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import cartEmpty from "../../img/emptyCart.png";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "../../components/CartForm/CartForm";

const Cart = ({onClick}) => {

 const cartProducts = useSelector(state => state.cartProducts)

  let sum = cartProducts.reduce((acc, curr) => {
    return acc + +curr.price
  }, 0)

  const dispatch = useDispatch()

const handleClearCart = () => {
  console.log('Click');
  dispatch({type: 'CLEAR_CART'})
}

  return (
    <>
      {!cartProducts.length && (
        <div className={styles.Header}>
          <p className={styles.Text}>Cart empty!</p>
          <img src={cartEmpty} alt="img" />
        </div>
      )}
      <div className={styles.Main}>
       {cartProducts.length !== 0 &&  
        <CartForm />
       } 
       {
        cartProducts.length !== 0 &&  
        <div className={styles.ShoppingCart}>
          <h3>Shopping Cart</h3>
          <button onClick={handleClearCart}>Clear</button>
        </div>
       }
       {
        cartProducts.length !== 0 &&   
        <div className={styles.CartContent}>
            <div className={styles.CartContentTitle}>Product</div>
            <div className={styles.CartContentColor}>Color</div>
            <div className={styles.CartContentPrice}>Price</div>
        </div>
       }
        <ul className={styles.Products}>
          {cartProducts.map((product, index) => {
            return (
              <CartProduct product={product} key={index} onClick={onClick} />
            );
          })}
        </ul>
        {
          cartProducts.length !== 0 &&   
          <div className={styles.Total}>Total: <span className={styles.TotalNumber}>{sum}</span> $</div>
        }
      </div>
     
    </>
  );
};

Cart.propTypes = {
  cartProducts: PropTypes.array,
  onClick: PropTypes.func,
};

export default Cart;
