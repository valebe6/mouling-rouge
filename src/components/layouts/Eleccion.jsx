import React from "react";
import { Link } from "react-router-dom";
import Acompañante from "./Acompañante";
import Escenario from "./Escenario";
import Jugar from "./Jugar";

const Eleccion = () => {
  return (
    <section >
      <section className="fondo">
        <section className="botonJugar">
          <button className="botonInstrucciones"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Si es tu primera vez da click
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">

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
                      <ul>1. da click en la imagen</ul>
                      <ul>2. Escoge el genero de tu acompañante</ul>
                      <ul>3. el escenario que desees (recuerda que estos lugares los encuentras en la cede Moulin Rouge en realidad virtual)</ul>
                      <ul>escoge el juego que deseas</ul>
                      <ul>4. y el juego</ul>
                      <ul>5. por ultimo da click en la flecha para jugar</ul>
                      <ul>" Recuerda que si tienes un@ acompañante regular puedes hacer parte de otros servicios."</ul>
                    </ol>
                  </section>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">
                    Entendido
                  </button>
                </div>
                <section />
              </div>
            </div >
          </div >
        </section >
      </section>


      <section className="contenedorSelecc">
        <section data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <Link className="botonSelecc">Seleccion</Link>
        </section>

        <section >
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className="columna">
                <Acompañante />
                <Escenario />
                <Jugar />
              </div>
            </div>
          </div>
        </section>

      </section>
    </section >
  );
};

export default Eleccion;
