import React from "react";
import Lugares from "./Lugares";
import Avatares from "./Avatares";
import { Link } from "react-router-dom";

const VistaCliente = () => {
  return (
    <section>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Instrucciones
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <section>
                <ol>
                  <ul>1. Mira los videos.</ul>
                  <ul>2. Mira los avatares (acompañantes)</ul>
                  <ul>
                    3. Recuerda que debes tener estos datos para poder reservar
                  </ul>
                  <ul>5. por ultimo da click en el boron reservar al final de la pagina, para realizar tu reserva y poder disfrutar de nuestros servicios.</ul>
                  <ul>
                    " Recuerda que si tienes un@ acompañante regular puedes
                    hacer parte de otros servicios."
                  </ul>
                </ol>
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Entendido
              </button>
            </div>
            <section />
          </div>
        </div>
      </div>
      <button
        className="botonInstrucciones"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Si es tu primera vez da click
      </button>
      <section className="sectionLugares">
        <Lugares />
      </section>
      <section className="sectionAvatares">
        <Avatares />
      </section>
      <section className="contenedorBtn">
        <Link className="btnReservar" to={"https://wa.me/3016365181"}>
          Reserva ahora
        </Link>
      </section>
    </section>
  );
};

export default VistaCliente;
