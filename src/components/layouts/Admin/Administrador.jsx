import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import VistaCliente from '../VistaCliente';


const Administrador = () => {
  return (
    <section>
    <header className='headerAdmin'>
        <h1>Administrador</h1>
        <button>Estado financiero</button>
        <button>Empleados</button>
        <button>Salas</button>
        <Link className='cerrar' to={'/Cerrar'}>Cerrar sesion</Link>
    </header>  
    <VistaCliente />
    <button>Crear</button>
    <button>Editar</button>
    </section>
    
  )
}

export default Administrador