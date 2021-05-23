import React, { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const ProductItem = ({ product, addToFavorite, dataForFavoriteId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSetFavorite = () => {
    addToFavorite(product.id);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    dataForFavoriteId.forEach((item) => {
      if (item === product.id) {
        setIsFavorite(true);
      }
    });
  }, [dataForFavoriteId, product.id]);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch({
      type: "OPEN_MODAL_FOR_ADD_TO_CART_PRODUCT",
      payload: product.id,
    });
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
    <li className={styles.ProductItem}>
      <div className={styles.ProductItemImg}>
        <img src={"db/" + product.img} alt={product.name} />
      </div>
      <div className={styles.Content}>
        <div className={styles.ProductItemName}>{product.name}</div>
        <div className={styles.ProductItemColor}>
          Color: <span className={styleColor}>{product.color}</span>
        </div>
        <div className={styles.StarContainer}>
          <div className={styles.Star} onClick={handleSetFavorite}>
            {isFavorite ? (
              <i
                className="fas fa-star"
                style={{ cursor: "pointer", color: "purple" }}
              ></i>
            ) : (
              <i
                className="far fa-star"
                style={{ cursor: "pointer", color: "purple" }}
              ></i>
            )}
          </div>
        </div>
        <div className={styles.ProductItemCode}>Code: {product.code}</div>
        <div className={styles.ProductItemBottom}>
          <div className={styles.ProductItemPrice}>Price: {product.price}$</div>
          <button onClick={handleOpenModal} className={styles.Button}>
            Add to cart &nbsp;
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  addToFavorite: PropTypes.func,
  dataForFavoriteId: PropTypes.array,
};

export default ProductItem;
