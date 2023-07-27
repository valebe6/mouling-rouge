import React from 'react'
import { Link } from "react-router-dom";
const Juego = () => {
  return (
    <section className="contenedorOpciones">
      <button  type="button" className="boton">
        <Link className="botonJugar"  to={'/seleccionar'} >Juego</Link>
    </button>
    
    </section>
    
  )
}

export default Juego