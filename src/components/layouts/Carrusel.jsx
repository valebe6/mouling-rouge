import React from 'react'

const Carrusel = () => {
  return (
    <section className='contenedorCarrusel'>
         <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="fachada.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="imagen1.jpg" className="d-block w-100" alt="imagen1"/>
    </div>
    <div className="carousel-item">
      <img src="imagen2.webp" className="d-block w-100" alt="imagen2"/>
    </div>

    <div className="carousel-item">
      <img src="imagen4.jpg" className="d-block w-100" alt="imagen2"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
   
  )
}

export default Carrusel