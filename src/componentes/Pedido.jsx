import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Pedido.css'
// import { listaDePedidos } from './Producto'
import {useState} from 'react'
import validator from 'validator'
function Pedido ({fun, lista}) {

    const [monto, setMonto] = useState(0)

    // formulario
    
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const [clasenombre, setclasenombre] = useState(true);
    const [clasetelefono, setclaseclasetelefono] = useState(true);
    const [clasedireccion, setclaseclasedireccion] = useState(true);
      
    const cambioEnInput = (event) => {
        const {id,value} = event.target;
      
        if (id === 'nombre') {
            setNombre(value);
        }else if (id === 'telefono') {
            setTelefono(value);
        }else if (id === 'direccion') {
            setDireccion(value);
        }
    }
      
    const clickConfirmar = () => {

        setclasenombre(true)
        setclaseclasetelefono(true)
        setclaseclasedireccion(true)
        
        if (!validator.isAlpha(nombre)) {
            setNombre('');
            setclasenombre(false);
        }else if(!validator.isNumeric(telefono) ){
            setTelefono('');
            setclaseclasetelefono(false);
        }else if(validator.isEmpty(direccion)){
            setDireccion('');
            setclaseclasedireccion(false);
        }else {
            
        }
    }    

    return (
    <div id='pedido' >
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
                    <input id='nombre' className={clasenombre ? 'correcto' :'fallo'}  placeholder='Nombre' type="text" value={nombre} onChange={cambioEnInput}/>
                    <input id='telefono' className={clasetelefono ? 'correcto' :'fallo'} placeholder='Telefono' type='tel' value={telefono} onChange={cambioEnInput}/>
                    <input id='direccion' className={clasedireccion ? 'correcto' :'fallo'} placeholder='Direccion' type="text" value={direccion} onChange={cambioEnInput}/>
                    </div>
                </div>
            </div>
            <div id='container-botones'>
                    <button id='confirmar' onClick={clickConfirmar}>
                    <span>Confirmar</span>
                    </button>
            </div>
        </div>
    </div>
    )
}

export default Pedido;