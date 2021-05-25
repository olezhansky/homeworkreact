import React from "react";
import styles from "./FavoriteProduct.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteProductFromFavoriteAction, openModalForAddFaforiteProductToCartAction } from "../../../store/actions";

const FavoriteProduct = ({ product}) => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModalForAddFaforiteProductToCartAction(product.id))
  };
  const handleDeleteProductFromFavorite = () => {
    dispatch(deleteProductFromFavoriteAction(product.id))
  }

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
          <div onClick={handleDeleteProductFromFavorite}>
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
          <button className={styles.Button} onClick={handleOpenModal}>
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
  deleteFromFavorite: PropTypes.func,
  addToCart: PropTypes.func,
};

export default FavoriteProduct;
