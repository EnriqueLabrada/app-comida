import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Pedido.css'


function Pedido () {
    return (
    <div id='pedido'>
        <div className="card-pedido shadow">
            <div id='container-pedidos'>
                <table id='tabla-pedidos'>
                    <tr>
                        <th>Productos</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td id='Producto' >Pan</td>
                        <td>
                            <button id='decremento'>-</button>
                            <span id='cantidad-pan'>0</span>
                            <button id='incremento'>+</button>
                        </td>
                    </tr>
                        <tr>
                            <td id='Producto'>Arroz</td>
                            <td>
                                <button id='decremento'>-</button>
                                <span id='cantidad-arroz'>0</span>
                                <button id='incremento'>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td id='Producto' >Galletas</td>
                            <td>
                                <button id='decremento'>-</button>
                                <span id='cantidad-galletas'>0</span>
                                <button id='incremento'>+</button>
                            </td>
                        </tr>
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
                <button id='volver'>
                    <span>Volver</span>
                </button>
                <button id='confirmar'>
                    <span>Confirmar</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Pedido