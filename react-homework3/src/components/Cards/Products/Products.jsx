import React from "react";
import styles from "./Products.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import PropTypes from "prop-types";

const Products = ({ products, addToCart }) => {
  return (
    <ul className={styles.Products}>
      {products.map((product) => {
        return (
          <ProductItem
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
  addToCart: PropTypes.func,
};

export default Products;
