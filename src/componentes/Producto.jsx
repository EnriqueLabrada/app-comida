import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Producto ({ precio, nombre, url, alt }) {
    return (
        <div className='col-12 col-md-4 col-lg-3'>
                <div className='card' >
                    <img src={require(`../imagenes/${url}`)} className='card-img-top'  alt={alt}/>
                    <div className='card-body' id='prueba'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p className='precio'>{precio}</p>
                    <a href='#e' className='btn btn-primary'>Añadir al carro <i className='bi bi-cart4'></i></a>
                    </div>
                </div>
        </div>
    //      <div class="col-12 col-md-4 col-lg-3">
    //      <div class="card" style="width: 18rem;">
    //          <img src="imagenes/pan.png" class="card-img-top"  alt="pan">
    //          <div class="card-body" id="prueba">
    //          <h5 class="card-title">Pan</h5>
    //          <p class="precio">200$</p>
    //          <a href="#" class="btn btn-primary">Añadir al carro <i class="bi bi-cart4"></i></a>
    //          </div>
    //      </div>
    //  </div>
    )
}

export default Producto