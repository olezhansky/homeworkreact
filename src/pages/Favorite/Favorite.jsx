import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favoriteProducts = useSelector((state) => state.favoriteProducts);

  return (
    <>
      {!favoriteProducts.length && (
        <h2 className={styles.Title}>Favorite empty!</h2>
      )}
      <ul className={styles.Favorite}>
        {favoriteProducts.map(product => {
          return <FavoriteProduct product={product} key={product.id} />;
        })}
      </ul>
    </>
  );
};

Favorite.propTypes = {
  favoriteProducts: PropTypes.object,
};

export default Favorite;
