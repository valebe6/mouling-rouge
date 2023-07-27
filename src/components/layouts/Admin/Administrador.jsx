import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';


const Administrador = () => {
  return (
    <header className='headerAdmin'>
        <h1>Administrador</h1>
        <button>Estado financiero</button>
        <button>Empleados</button>
        <button>Salas</button>
        <Link className='cerrar' to={'/Cerrar'}>Cerrar sesion</Link>
    </header>
  )
}

export default Administrador