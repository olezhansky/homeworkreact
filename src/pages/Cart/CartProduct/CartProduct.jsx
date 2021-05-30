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
  let styleColor = "";
  if (product.color === "Red") {
    styleColor = styles.Red;
  } else if (product.color === "Blue") {
    styleColor = styles.Blue;
  } else {
    styleColor = styles.Black;
  }
  return (
    <li className={styles.Cart}>
      <div className={styles.CartImgName}>
        <div className={styles.CartImg}>
          <img src={"db/" + product.img} alt={product.name} />
        </div>
        <div className={styles.CartName}>
          {product.name}
        </div>
      </div>   
      <div className={styles.CartColor}>
        <span className={styleColor}>{product.color}</span>
      </div>
      <div className={styles.CartPrice}>
        {product.price}$
      </div>
      <div className={styles.CartButtonClose}>
        <img src={closeImg} alt={"closeImg"} onClick={openConfirmCloseModal} />
      </div>
    </li>
  );
};

Cart.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default Cart;
