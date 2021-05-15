import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ products, text, onClick, backgroundColor }) => {
  return (
    <button
      products={products}
      style={{ backgroundColor }}
      className={styles.Button}
      onClick={() => onClick(products.id)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  products: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

export default Button;
