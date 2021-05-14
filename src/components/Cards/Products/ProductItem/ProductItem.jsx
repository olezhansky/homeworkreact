import React, { useState, useEffect } from "react";
import styles from "./ProductItem.module.scss";
import PropTypes from "prop-types";

const ProductItem = ({ product, addToCart, addToFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const setFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", product.id);
    } else {
      const favoriteArr = localStorage.getItem("favorite").split(",");
      if (!favoriteArr.includes(product.id)) {
        favoriteArr.push(product.id);
        localStorage.setItem("favorite", favoriteArr);
      } else {
        const newFavorite = favoriteArr.filter((item) => item !== product.id);
        localStorage.setItem("favorite", newFavorite);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      const arr = localStorage.getItem("favorite").split(",");
      if (arr.includes(product.id)) {
        setIsFavorite(!isFavorite);
      }
    }
  }, []);

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
        <div onClick={() => addToFavorite(product.id)}>
          <div className={styles.Star} onClick={setFavorite}>
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
          <button
            onClick={() => addToCart(product.id)}
            className={styles.Button}
          >
            Add to cart &nbsp;
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  code: PropTypes.string,
  price: PropTypes.string,
};

export default ProductItem;

