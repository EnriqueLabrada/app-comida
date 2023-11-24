import './App.css'
import Nav from './componentes/Nav'
import Producto from './componentes/Producto'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Pedido from './componentes/Pedido'
import { useState } from 'react'


function App () {
    let [lista, setLista] = useState([])
    
    const actualizarLista = (list, add) => {
         list = [...list, add]
        setLista(list)
        alert('Añadido al carrito con éxito') 
    }
    const eliminarPedido = (list, num) => {
        setLista(list = list.filter(pedido => pedido.num !== num)) 
     }

    let Total = 0
    let mensajePedido =''

    lista.map(pedido => Total = parseInt(pedido.precio)*parseInt(pedido.monto) + Total )
    lista.map(pedido => mensajePedido = mensajePedido + `Nombre: ${pedido.nombre} Cantidad: ${pedido.monto} Precio: ${pedido.precio} c/u  \n`)

    return(
        <>
        <Nav ></Nav>
            <main>
                <h1 id='comida' >Comida <i class='bi bi-egg-fried'></i></h1>
                <div id='comida-container' className='container-fluid d-flex row' >
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Pan'} precio={'200$'} alt={'pan'} url={'pan.png'} ></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Galletas'} precio={'220$'} alt={'galletas'} url={'galletas.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Galleticas'} precio={'50$'} alt={'galleticas'} url={'galleticas.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Palitroque'} precio={'220$'} alt={'Palitroque'} url={'palitroque.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Arroz con leche'} precio={'1100$'} alt={'Arroz con leche'} url={'arroz-con-leche.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Galletas'} precio={'220$'} alt={'Galletas'} url={'galletas.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Palitroque'} precio={'220$'} alt={'Palitroque'} url={'palitroque.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Pan'} precio={'200$'} alt={'asd'} url={'pan.png'}></Producto>
                </div>
                <h1 id='bebida'>Bebida <i class='bi bi-cup-straw'></i></h1>
                <div id='bebida-container' className='container-fluid d-flex row'>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto> 
                </div >
                <h1 id='aseo'>Aseo<i class='bi bi-stars'></i></h1>
                <div id='aseo-container' className='container-fluid d-flex row'>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Papel'} precio={'130$'} alt={'Papel'} url={'papel.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Detergente'} precio={'800$'} alt={'detergente'} url={'detergente.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Shampoo'} precio={'350$'} alt={'Shampoo'} url={'shampoo.png'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Pasta'} precio={'100$'} alt={'pasta'} url={'pasta.png'}></Producto>
                </div>
                <Pedido fun={eliminarPedido} lista={lista} total={Total} mensajePedido={mensajePedido}></Pedido>
            </main>
        </>
    )
}

export default App