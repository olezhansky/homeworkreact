import React, { useState, useEffect } from "react";
import styles from "./FavoriteProduct.module.scss";
import PropTypes from "prop-types";

const FavoriteProduct = ({ product, onClick, addToCart }) => {
  // const [isFavorite, setIsFavorite] = useState(false);

  // const setFavorite = () => {
  //   setIsFavorite(!isFavorite);
  //   if (!localStorage.getItem("favorite")) {
  //     localStorage.setItem("favorite", product.id);
  //   } else {
  //     const favoriteArr = localStorage.getItem("favorite").split(",");
  //     if (!favoriteArr.includes(product.id)) {
  //       favoriteArr.push(product.id);
  //       localStorage.setItem("favorite", favoriteArr);
  //     } else {
  //       const newFavorite = favoriteArr.filter((item) => item !== product.id);
  //       localStorage.setItem("favorite", newFavorite);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("favorite")) {
  //     const arr = localStorage.getItem("favorite").split(",");
  //     if (arr.includes(product.id)) {
  //       setIsFavorite(!isFavorite);
  //     }
  //   }
  // }, []);

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
        <div>
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

export default FavoriteProduct;
