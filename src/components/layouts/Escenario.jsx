import React from 'react'
import { Link } from 'react-router-dom'

const Escenario = () => {
    return (
        <section>
        <Link className="botonJugar" to={'/seleccionar'} >Escenario</Link>
     </section>
    )
}

export default Escenario