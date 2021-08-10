import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favoriteProducts = useSelector((state) => state.favoriteProducts);

  return (
    <div className={styles.FavoriteWrapper}>
      {!favoriteProducts.length && (
        <h2 className={styles.Title}>Favorites empty!</h2>
      )}
      <ul className={styles.Favorite}>
        {favoriteProducts.map(product => {
          return <FavoriteProduct product={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

Favorite.propTypes = {
  favoriteProducts: PropTypes.object,
};

export default Favorite;
