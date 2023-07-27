import React from 'react'
import { Link } from 'react-router-dom'
import Trabaja from './Trabaja'
const Quienes = () => {
  return (
    <section className='posicionDescripcion'>
        <section className='descripcion'>
            <p>
                El moulin Rouge es una casa de entretenimiento fundada en 1889 por el por el catalán Josep Oller y el francés Charles Zidler, que ya eran propietarios del Olympia de París. Esta situado en el poblado.
            </p>
            <p>Si vas a este atractivo podras escoger tu acompañante, conocer amigos, disfrutar de bailes,  compartir juegos, y muchas cosas mas. Aqui no hay prejuicios. </p>
            <p>Contamos con un juego donde podras disfrutar.</p>
        </section>
        <section>
            <p>Direccion:  Cl 10 #25-18</p>
        </section>
        <Link className='nombreRegistro'>Reserva tu cita</Link>
        <section>
      <Trabaja/>
        </section>
    </section>
  )
}

export default Quienes