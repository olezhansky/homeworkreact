import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";

const Favorite = ({ dataForFavorite, onClick, addToCart }) => {
  console.log(dataForFavorite);

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

export default Favorite;
