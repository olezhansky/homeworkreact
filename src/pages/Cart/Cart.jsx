import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import cartEmpty from "../../img/emptyCart.png";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "../../components/CartForm/CartForm";
import { totalSumAction } from "../../store/actions";

const Cart = ({onClick}) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(totalSumAction())
  }, [state.cartProducts, dispatch])
  return (
    <div className={styles.CartWrapper}>
      {!state.cartProducts.length && (
        <div className={styles.Header}>
          <p className={styles.Text}>Cart empty!</p>
          <img src={cartEmpty} alt="img" />
        </div>
      )}
      {
        state.cartProducts.length !== 0 &&  
        <div className={styles.Main}>
          <div className={styles.MainContentProducts}>
            <div className={styles.MainHeader}>
              <h3>Shopping Cart</h3>
              <p>{state.cartProducts.length} {state.cartProducts.length === 1 ? "Item" : "Items"}</p>
            </div>
            <div className={styles.CartContent}>
                <div className={styles.CartContentTitle}>Product</div>
                <div className={styles.CartContentColor}>Color</div>
                <div className={styles.CartContentPrice}>Price</div>
            </div>
            <ul className={styles.Products}>
              {state.cartProducts.map((product, index) => {
                return (
                  <CartProduct product={product} key={index} onClick={onClick} />
                );
              })}
            </ul>
            <div className={styles.Total}>Total cost: <span className={styles.TotalSum}>{state.totalSum}</span> $</div>
          </div>
          <CartForm />
        </div>
      }
    </div>
  );
};

Cart.propTypes = {
  cartProducts: PropTypes.array,
  onClick: PropTypes.func,
};

export default Cart;
