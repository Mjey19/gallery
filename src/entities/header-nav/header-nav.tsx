import React from "react";
import { Link } from "react-router";
import styles from "./header-nav.module.css";
export function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <Link className={styles.headerNavLink} to={"/"}>
        Главная
      </Link>
      <div className={styles.headerLogo}></div>
      <Link className={styles.headerNavLink} to={"/author"}>
        Author
      </Link>
    </nav>
  );
}
