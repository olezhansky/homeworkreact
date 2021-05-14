import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ products, text, onClick, backgroundColor }) => {
  console.log(products);
  console.log(text);

  return (
    <button
      products={products}
      style={{ backgroundColor }}
      className={styles.Button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;