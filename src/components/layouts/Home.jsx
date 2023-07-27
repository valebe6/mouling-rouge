import React from "react";
import Header from "../helpers/Header";
import Carrusel from "./Carrusel";
import Quienes from "./Quienes";

const Home = () => {
  return (
    <section>
      <section className="encabezado">
        <Header />
      </section>

      <Carrusel />

      <Quienes />
    </section>
  );
};

export default Home;
