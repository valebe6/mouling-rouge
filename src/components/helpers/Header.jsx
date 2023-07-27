import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="header">
      <section className="contenedorLogo">
        <img src="/logo.png" alt="logo" />
      </section>
      <section className="nombre">
        <img src="/medellin.png" alt="" />
      </section>
      <section className="contenedorOpciones">
        <Link className="boton botonJugar" to={"/vista-cliente"}>
          Juego
        </Link>
      </section>
    </section>
  );
};

export default Header;
