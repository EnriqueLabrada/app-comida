import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Proucto.css'
import { useState } from 'react'

let listaDePedidos = []

function Producto ({ precio, nombre, url, alt,  }) {

    class Pedido {
        constructor(precio, nombre, monto) {
            this.precio = precio
            this.nombre = nombre
            this.monto = monto
        }
    }

    const[cantidad,setCantidad] = useState(0)

    const aumentar = () => {
        setCantidad(cantidad + 1) 
    }

    const disminuir = () => {
        if(cantidad > 0) {
            setCantidad( cantidad - 1)    
        }
    }

    const funPedido = () => {
       const add =  new Pedido(precio, nombre, cantidad)
       listaDePedidos  =[...listaDePedidos, add]
       console.log(listaDePedidos)
       setCantidad(0)
    }


    return (
        <div className='col-12 col-md-4 col-lg-3' id='card-cont' >
                <div className='card' id='card' >
                    <img src={require(`../imagenes/${url}`)} className='card-img-top'  alt={alt}/>
                    <div className='card-body' id='prueba'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p className='precio'>{precio}</p>
                    <form >
                        <h6>Cantidad</h6>
                        <div className='container cantidad'>
                            <div id='mas'  className='mas btn btn-primary' onClick={aumentar}> + </div>
                            <div id='contador'>{cantidad}</div>
                            <div id='menos' className='menos btn btn-primary'  onClick={disminuir}> - </div>
                        </div>
                        <div  className='btn btn-primary' onClick={funPedido} >Añadir al carro <i className='bi bi-cart4'></i></div>
                    </form>
                    </div>
                </div>
        </div>
    )
}

export default Producto
export {listaDePedidos}