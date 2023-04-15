import styles from "./Inicio.module.css";
import React, { useEffect, useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";

export default function Inicio() {
  const url =
    "https://my-json-server.typicode.com/m-Daniel007/cinetag-api/videos";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes !</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}
