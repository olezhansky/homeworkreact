import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = ({ dataForModalCart, dataForFavorite }) => {
  console.log(dataForFavorite);
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
            {dataForFavorite.length !== 0 && dataForFavorite.length}
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cart">
              Cart
            </NavLink>
            &nbsp;
            <i className="fas fa-shopping-cart"></i>
            &nbsp;
            <span className={styles.Counter}>
              {dataForModalCart.length !== 0 && dataForModalCart.length}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
