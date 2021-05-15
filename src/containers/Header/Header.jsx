import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ dataForModalCart, dataForFavorite }) => {
  return (
    <div className={styles.Header}>
      <nav className={styles.Menu}>
        <ul className={styles.MenuList}>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/favorite">
              Favorites
            </NavLink>
            &nbsp;
            <i className="far fa-grin-stars"></i>
            &nbsp;
            <span className={styles.CounterFavorite}>
              {dataForFavorite.length !== 0 && dataForFavorite.length}
            </span>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cart">
              Cart
            </NavLink>
            &nbsp;
            <i className="fas fa-shopping-cart"></i>
            &nbsp;
            <span className={styles.CounterCart}>
              {dataForModalCart.length !== 0 && dataForModalCart.length}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  dataForModalCart: PropTypes.array,
  dataForFavorite: PropTypes.array,
};

export default Header;
