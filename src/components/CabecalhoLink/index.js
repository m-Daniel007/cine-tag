import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";
import React from "react";

export default function CabecalhoLink({ children, url }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}
