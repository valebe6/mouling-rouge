import React from "react";
import Lugares from "./Lugares";
import Avatares from "./Avatares";

const VistaCliente = () => {
  return (
    <section>
      <section className="sectionLugares">
        <Lugares />
      </section>
      <section className="sectionAvatares">
        <Avatares />
      </section>
    </section>
  );
};

export default VistaCliente;
