import Banner from "components/Banner";
import styles from "./Player.module.css";
import React from "react";
import Titulo from "components/Titulo";
import videos from "db.json";
import { useParams } from "react-router-dom";
import Pagina404 from "pages/Pagina-404";

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => video.id === Number(params.id));

  if (!video) {
    return <Pagina404 />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
