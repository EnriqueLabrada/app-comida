import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Proucto.css'

function Producto ({ precio, nombre, url, alt }) {
    return (
        <div className='col-12 col-md-4 col-lg-3' id='card-cont' >
                <div className='card' id='card' >
                    <img src={require(`../imagenes/${url}`)} className='card-img-top'  alt={alt}/>
                    <div className='card-body' id='prueba'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p className='precio'>{precio}</p>
                    <a href='#e' className='btn btn-primary'>Añadir al carro <i className='bi bi-cart4'></i></a>
                    </div>
                </div>
        </div>
    )
}

export default Producto