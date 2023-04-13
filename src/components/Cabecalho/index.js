import { Link } from "react-router-dom";
import "./Cabecalho.module.css";
import React from "react";
import styles from "./Cabecalho.module.css";
import logo from './logo.png'
import CabecalhoLink from "components/CabecalhoLink";


export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img src={logo} alt="logo cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="/">Home</CabecalhoLink>
        <CabecalhoLink url="/favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}
