import React from "react";
import Lugares from "./Lugares";
import Avatares from "./Avatares";
import { Link } from "react-router-dom";

const VistaCliente = () => {
  return (
    <section>
      <section className="sectionLugares">
        <Lugares />
      </section>
      <section className="sectionAvatares">
        <Avatares />
      </section>
      <section></section>
    </section>
  );
};

export default VistaCliente;
