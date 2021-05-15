import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import PropTypes from "prop-types";

const Favorite = ({ dataForFavorite, onClick, addToCart }) => {
  return (
    <>
      {!dataForFavorite.length && (
        <h2 className={styles.Title}>Favorite empty!</h2>
      )}
      <ul className={styles.Favorite}>
        {dataForFavorite.map((product, index) => {
          return (
            <FavoriteProduct
              addToCart={addToCart}
              product={product}
              key={index}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </>
  );
};

Favorite.propTypes = {
  dataForFavorite: PropTypes.array,
  onClick: PropTypes.func,
  addToCart: PropTypes.func,
};

export default Favorite;
