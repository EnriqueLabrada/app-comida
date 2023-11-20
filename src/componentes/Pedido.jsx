import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Pedido.css'
// import { listaDePedidos } from './Producto'
import {useState} from 'react'

function Pedido ({fun, lista}) {

    const [monto, setMonto] = useState(0)


    return (
    <div id='pedido'>
        <div className="card-pedido shadow">
            <div id='container-pedidos'>
                <table id='tabla-pedidos'>
                    <tr>
                        <th>Productos</th>
                        <th>Cantidad</th>
                    </tr>
                    {lista.map((pedido) => (
                    <tr key={pedido.num}><td id='Producto'><i id='borrar' className='bi bi-trash' onClick={() => fun(lista, pedido.num)} ></i>{pedido.nombre}</td>
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
                </table>                       
            </div>
            
            <div id='formulario'>
            <div className="card-formulario">
                <div className="card__form">
                    <input id='nombre' placeholder="Nombre" type="text"/>
                    <input id='telefono' placeholder="Telefono" type='tel'/>
                    <input id='direccion' placeholder="Direccion" type="text"/>
                </div>
            </div>
            </div>
            <div id='container-botones'>
                <button id='confirmar'>
                    <span>Confirmar</span>
                </button>
            </div>
            
        </div>
    </div>
    )
}

export default Pedido