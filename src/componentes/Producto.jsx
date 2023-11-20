import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Proucto.css'
import { v4 } from 'uuid'
import { useState } from 'react'



function Producto ({ precio, nombre, url, alt, actualizarLista, listaDePedidos}) {

    
    class pedido {
        constructor(precio, nombre, monto, num) {
            this.precio = precio
            this.nombre = nombre
            this.monto = monto
            this.num = num
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
        if(cantidad>0){
            const add =  new pedido(precio, nombre, cantidad, v4())
            setCantidad(0)
            actualizarLista(listaDePedidos,add)
        }
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

