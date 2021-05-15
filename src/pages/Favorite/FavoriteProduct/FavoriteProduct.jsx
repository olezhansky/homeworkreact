import React from "react";
import styles from "./FavoriteProduct.module.scss";
import PropTypes from "prop-types";

const FavoriteProduct = ({ product, onClick, addToCart }) => {
  return (
    <li className={styles.FavoriteItem}>
      <div className={styles.FavoriteItemImg}>
        <img src={"db/" + product.img} alt={product.name} />
      </div>
      <div className={styles.Content}>
        <div className={styles.ProductItemName}>{product.name}</div>
        <div className={styles.FavoriteItemColor}>
          Color: <span>{product.color}</span>
        </div>
        <div className={styles.Star}>
          <div onClick={() => onClick(product.id)}>
            <i
              className="fas fa-star"
              style={{ cursor: "pointer", color: "purple" }}
            ></i>
          </div>
        </div>
        <div className={styles.FavoriteItemCode}>Code: {product.code}</div>
        <div className={styles.FavoriteItemBottom}>
          <div className={styles.FavoriteItemPrice}>
            Price: {product.price}$
          </div>
          <button
            className={styles.Button}
            onClick={() => addToCart(product.id)}
          >
            Add to cart &nbsp;
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

FavoriteProduct.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  addToCart: PropTypes.func,
};

export default FavoriteProduct;
