import React from "react";
import styles from "./CartProduct.module.scss";
import closeImg from "../../../img/closeImg.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { openModalForDeleteProductFromCartAction } from "../../../store/actions";

const Cart = ({ product }) => {
  const dispatch = useDispatch();

  const openConfirmCloseModal = () => {
    dispatch(openModalForDeleteProductFromCartAction(product));
  };

  return (
    <li className={styles.Cart}>
      <div className={styles.CartButtonClose}>
        <img src={closeImg} alt={"closeImg"} onClick={openConfirmCloseModal} />
      </div>
      <h3>{product.name}</h3>
      <div className={styles.CartMain}>
        <div className={styles.CartImg}>
          <img src={"db/" + product.img} alt="" />
        </div>
        <ul className={styles.CartDescription}>
          <li>
            <span>Color:</span> {product.color}
          </li>
          <li>
            <span>Code:</span> {product.code}
          </li>
          <li>
            <span>Price:</span> {product.price}$
          </li>
        </ul>
      </div>
    </li>
  );
};

Cart.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default Cart;
