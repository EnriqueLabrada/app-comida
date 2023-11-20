import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Pedido.css'
import {useState} from 'react'
import { listaDePedidos } from './Producto'

function ProductoPedido ({eliminar}) {

    const [monto, setMonto] = useState(0)

  return(
        <>
            {listaDePedidos.map((pedido) => (
                <tr key={pedido.num}><td id='Producto'><i id='borrar' className='bi bi-trash'   ></i>{pedido.nombre}</td>
                <td>
                    <button id='decremento' onClick={() => {
                        if(pedido.monto > 0) {

                            setMonto(pedido.monto = pedido.monto - 1)
                            
                        }
                    }}>-</button>
                    
                    <span id='cantidad'>{pedido.monto}</span>
                    
                    <button id='incremento' onClick={() => {
                        
                        setMonto(pedido.monto = pedido.monto + 1)
                        
                    }}>+</button>
                </td></tr>
            ))}
        </>
  )
}

export default ProductoPedido


/* {listaDePedidos.map((pedido) => (
                <tr key={pedido.num}><td id='Producto'><i id='borrar' className='bi bi-trash' onClick={eliminar(pedido.num)} ></i>{pedido.nombre}</td>
                <td>
                    <button id='decremento' onClick={() => {
                        if(pedido.monto > 0) {

                            setMonto(pedido.monto = pedido.monto - 1)
                            
                        }
                    }}>-</button>
                    
                    <span id='cantidad'>{pedido.monto}</span>
                    
                    <button id='incremento' onClick={() => {
                        
                        setMonto(pedido.monto = pedido.monto + 1)
                        
                    }}>+</button>
                </td></tr>
            ))} */