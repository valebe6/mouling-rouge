import React from 'react'

const Trabaja = () => {
  return (
    <section className='BotonTrabaja'>
      <button type="button"   data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Trabaja con nosotros</button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            </div>
            
            <div className="modal-body">

              <form className='formulario'>
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">Nombre</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" />

                  <label for="exampleInput" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  <label for="exampleInputEmail" className="form-label">Correo</label>
                  <input type="email" className="form-control" />
                  <div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Trabaja