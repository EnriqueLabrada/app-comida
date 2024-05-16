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
                <h1 id='entrantes' >Entrantes </h1>
                <div id='entrantes-container' className='container-fluid d-flex row' >
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Croquetas'} precio={'400$'} alt={'croquetas'} url={'croquetas.jpg'} ></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Crema de queso'} precio={'520$'} alt={'crema'} url={'crema.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Tostones rellenos'} precio={'460$'} alt={'tostones'} url={'tostones.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Eperlán de Pescado'} precio={'560$'} alt={'esperlan'} url={'esperlan.jpg'}></Producto>
                </div>
                <h1 id='comida'>Comida</h1>
                <div id='comida-container' className='container-fluid d-flex row'>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Bistec Uruguayo'} precio={'800$'} alt={'uruguayo'} url={'uruguayo.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Lomo de cerdo'} precio={'900$'} alt={'lomo'} url={'lomo.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Pizza Napolitana'} precio={'450$'} alt={'Pizza'} url={'piza.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Espaguetis'} precio={'400$'} alt={'espaguetis'} url={'espagueti.jpg'}></Producto>
                </div>
                <h1 id='guarniciones'>Guarniciones</h1>
                <div id='guarniciones-container' className='container-fluid d-flex row'>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Arroz'} precio={'300$'} alt={'arroz'} url={'arroz.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Arroz congris'} precio={'340$'} alt={'congris'} url={'congri.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Arroz frito'} precio={'420$'} alt={'arroz-frito'} url={'arroz-frito.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Garbanzos fritos'} precio={'620$'} alt={'garbanzos'} url={'garbanzos.jpg'}></Producto>
                </div>
                <h1 id='liquidos'>Líquidos</h1>
                <div id='liquidos-container' className='container-fluid d-flex row'>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Malta'} precio={'210$'} alt={'malta'} url={'malta-importada.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Cerveza'} precio={'190$'} alt={'cerveza'} url={'cerveza.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Pepsi'} precio={'220$'} alt={'pepsi'} url={'pepsi.jpg'}></Producto>
                    <Producto listaDePedidos={lista} actualizarLista={actualizarLista}  nombre={'Jugo de Manzana'} precio={'520$'} alt={'Jugo de manzana'} url={'jugo-manzana.jpg'}></Producto>
                </div>
                <Pedido fun={eliminarPedido} lista={lista} total={Total} mensajePedido={mensajePedido}></Pedido>
            </main>
        </>
    )
}

export default App