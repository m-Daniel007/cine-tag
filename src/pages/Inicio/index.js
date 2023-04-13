import Cabecalho from "components/Cabecalho";
import styles from "./Inicio.module.css";
import React from "react";
import Rodape from "components/Rodape";
import Banner from "components/Banner";
import Titulo from "components/Titulo";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}
