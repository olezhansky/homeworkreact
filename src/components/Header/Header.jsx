import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = ({dataForModalCart}) => {
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
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cart">
              Cart
            </NavLink>
            &nbsp;
            <i className="fas fa-shopping-cart"></i>
            &nbsp;
            <span className={styles.Counter}>{dataForModalCart.length !== 0 && dataForModalCart.length}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
