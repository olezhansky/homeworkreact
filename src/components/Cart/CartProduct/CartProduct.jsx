import React from "react";
import styles from './CartProduct.module.scss'
import closeImg from "../../../img/closeImg.png";

const Cart = ({ product, onClick }) => {
  return (
    <li className={styles.Cart}>
       <div className={styles.CartButtonClose} onClick={() => onClick(product.id)}>
        <img src={closeImg} alt={"closeImg"} />
      </div>
      
      <h3>{product.name}</h3>
      <div className={styles.CartMain}>
        <div className={styles.CartImg}>
          <img src={"db/" + product.img} alt="" />
        </div>
        <div className={styles.CartDescription}>
          <div>{product.color}</div>
          <div className={styles.CartStar}>
            <i
              className="fas fa-star"
              style={{ cursor: "pointer", color: "purple" }}
            ></i>
        </div>
        <div>Code: {product.code}</div>
        <div>Price: {product.price}</div>
        </div>
      </div>
      
    </li>
  )
  
};

export default Cart;
