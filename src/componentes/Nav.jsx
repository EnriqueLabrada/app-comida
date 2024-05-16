import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Nav.css'


function Nav () {
    return (
        <nav id='nav' className='navbar navbar-expand-lg bg-body-tertiary shadow-lg'>
        <div className='container-fluid'>
            <img  id='Logo' src={require('../imagenes/LOGO.png')} alt='Logo' />
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-entrantes' href='#entrantes'>Entrantes</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-comida' href='#comida'>Comida</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-guarniciones' href='#guarniciones'>Guarniciones</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-liquidos' href='#liquidos'>Líquidos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' id='link-productos' href='#pedido'>Pedido <i className='bi bi-basket'></i></a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav