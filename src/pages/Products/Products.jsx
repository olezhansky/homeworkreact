import React from "react";
import styles from "./Products.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import PropTypes from "prop-types";

const Products = ({ products, addToCart, addToFavorite }) => {
  return (
    <ul className={styles.Products}>
      {products.map((product) => {
        return (
          <ProductItem
            addToFavorite={addToFavorite}
            addToCart={addToCart}
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
};

export default Products;