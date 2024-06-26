import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../hojas-de-estilos/Pedido.css'
import {useState} from 'react'
import validator from 'validator'



function Pedido ({fun, lista, total, mensajePedido}) {

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
        console.log(monto)
        setclasenombre(true)
        setclaseclasetelefono(true)
        setclaseclasedireccion(true)
        
        if (!validator.isAlpha(nombre) || !validator.isByteLength(nombre,{min: 3, max: 30})) {
            setNombre('');
            setclasenombre(false);
        }else if(!validator.isNumeric(telefono)  || !validator.isByteLength(telefono,{min: 7, max: 17}) ){
            setTelefono('');
            setclaseclasetelefono(false);
        }else if(validator.isEmpty(direccion)  || !validator.isByteLength(nombre,{min: 3, max: 50})){
            setDireccion('');
            setclaseclasedireccion(false);
        }else  {
            window.open(`https://api.whatsapp.com/send?phone=56574698&text=Pedido de:${nombre},\n   Telefono:${telefono},  \n Dirección:${direccion},   \n  Productos:${mensajePedido},  \n  Total: $${total}`, 'blank')
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
                    <input id='nombre' className={clasenombre ? 'correcto' :'fallo'}  placeholder={clasenombre ? 'Nombre' :'Nombre no valido'} type="text" value={nombre} onChange={cambioEnInput}/>
                    <input id='telefono' className={clasetelefono ? 'correcto' :'fallo'} placeholder={clasetelefono ? 'Telefono' :'Telefono no valido'} type='tel' value={telefono} onChange={cambioEnInput}/>
                    <input id='direccion' className={clasedireccion ? 'correcto' :'fallo'} placeholder={clasedireccion ? 'Direccion' :'Direccion no valido'} type="text" value={direccion} onChange={cambioEnInput}/>
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