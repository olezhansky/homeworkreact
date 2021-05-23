import React from "react";
import styles from "./Products.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import PropTypes from "prop-types";

const Products = ({ products, addToFavorite, dataForFavoriteId }) => {
  return (
    <ul className={styles.Products}>
      {products.map((product) => {
        return (
          <ProductItem
            dataForFavoriteId={dataForFavoriteId}
            addToFavorite={addToFavorite}
            key={product.id}
            product={product}
          />
        );
      })}
    </ul>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  addToFavorite: PropTypes.func,
  dataForFavoriteId: PropTypes.array,
};

export default Products;
