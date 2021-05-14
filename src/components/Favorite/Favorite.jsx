import React from "react";
import styles from "./Favorite.module.scss";
import FavoriteProduct from './FavoriteProduct/FavoriteProduct'

const Favorite = ({dataForFavorite}) => {
  console.log(dataForFavorite);
  return  (
    <>
    {!dataForFavorite.length && <h2 className={styles.Title}>Favorite empty!</h2>}
    <ul className={styles.Favorite}>
      {dataForFavorite.map((product, index) => {
        return <FavoriteProduct product={product} key={index} />;
      })}
    </ul>
    </>
  )

};

export default Favorite;
