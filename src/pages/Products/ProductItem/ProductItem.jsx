import React, { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProductToFavoriteAction, openModalForAddProductToCartAction } from "../../../store/actions";

const ProductItem = ({ product, favoriteProducts }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    favoriteProducts.forEach((item) => {
      if (item.id === product.id) {
        setIsFavorite(true);
      }
    });
  }, [favoriteProducts, product.id]);
  
  const handleAddToFavorite = () => {
    dispatch(addProductToFavoriteAction(product))
    setIsFavorite(!isFavorite);
  };

  const handleOpenModal = () => {
    dispatch(openModalForAddProductToCartAction(product.id));
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
          <div className={styles.Star} onClick={handleAddToFavorite}>
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
  favoriteProducts: PropTypes.array,
};

export default ProductItem;
