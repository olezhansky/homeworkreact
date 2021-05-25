import React from "react";
import styles from "./Products.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import PropTypes from "prop-types";
import {useSelector } from "react-redux";

const Products = () => {
  const products = useSelector(state => state.products);
  const favoriteProducts = useSelector(state => state.favoriteProducts);
  return (
    <ul className={styles.Products}>
      {products.map(product => {
        return (
          <ProductItem
            favoriteProducts={favoriteProducts}
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
};

export default Products;
