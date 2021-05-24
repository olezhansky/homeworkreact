import React from "react";
import styles from "./Products.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import PropTypes from "prop-types";
import {useSelector } from "react-redux";

const Products = () => {

  const products = useSelector((state) => state.products);
  return (
    <ul className={styles.Products}>
      {products.map((product) => {
        return (
          <ProductItem
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
