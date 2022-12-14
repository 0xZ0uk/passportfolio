import React from "react";
import { IoEarth } from "react-icons/io5";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <IoEarth size={35} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuWrapper}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Portfolios</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
