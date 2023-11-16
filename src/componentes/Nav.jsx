import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Nav.css'


function Nav () {
    return (
        <nav id='nav' className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
            <img  id='Logo' src={require('../imagenes/LOGO.jpg')} alt='Logo' />
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-comida' href='#comida'>Comida <i className='bi bi-egg-fried'></i></a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-bebida' href='#bebida'>Bebida <i className='bi bi-cup-straw'></i></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'  id='link-utiles' href='#Utiles'>Utiles <i className='bi bi-tools'></i></a>
                  </li>
                <li className='nav-item'>
                  <a className='nav-link'  id='link-aseo' href='#aseo'>Aseo <i className='bi bi-stars'></i></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' id='link-productos' href='#e'>Pedido <i className='bi bi-basket'></i></a>
                  </li>
              </ul>
            <form className='d-flex'  role='search'>
              <input className='form-control me-2 search'  type='search' placeholder='Buscar' aria-label='Search'/>
              <button className='btn btn-outline-success search' id='search' type='submit'>Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Nav