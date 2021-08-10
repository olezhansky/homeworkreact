import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Header = () => {

  const favoriteProducts = useSelector(state => state.favoriteProducts)
  const cartProducts = useSelector(state => state.cartProducts)

  return (
    <div className={styles.Header}>
      <nav className={styles.Menu}>
        <ul className={styles.MenuList}>
          <li>
            <NavLink activeClassName={styles.active} to="/homeworkreact">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/favorites">
              Favorites
            </NavLink>
            &nbsp;
            <i className="far fa-grin-stars"></i>
            &nbsp;
            <span className={styles.CounterFavorite}>
              {favoriteProducts.length !== 0 && favoriteProducts.length}
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
              {cartProducts.length !== 0 && cartProducts.length}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  favoriteProducts: PropTypes.array,
  cartProducts: PropTypes.array
};

export default Header;
