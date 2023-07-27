import React from 'react'
import { Link } from 'react-router-dom'

const Acompañante = () => {
  return (
    <section>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acompañante
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">
    <Link className="botonJugar"  to={'/'} >Masculino</Link>
      </a></li>
    <li><a class="dropdown-item" href="#">
    <Link className="botonJugar"  to={'/'} >Femenino</Link>
    </a>
    
    </li>

  </ul>
</div>
    
      
  
  </section>
  )
}

export default Acompañante