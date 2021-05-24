import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Favorite = ({ deleteFromFavorite, addToCart }) => {

  const dataForFavorite = useSelector(state => state.dataForFavorite)

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
              deleteFromFavorite={deleteFromFavorite}
            />
          );
        })}
      </ul>
    </>
  );
};

Favorite.propTypes = {
  dataForFavorite: PropTypes.array,
  deleteFromFavorite: PropTypes.func,
  addToCart: PropTypes.func,
};

export default Favorite;
