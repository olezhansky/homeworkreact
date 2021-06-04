import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({children, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
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

