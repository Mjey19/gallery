import React from "react";
import styles from "./header.module.css";
import { HeaderNav } from "../../entities";
export function Header() {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
}
