import './App.css'
import Nav from './componentes/Nav'
import Producto from './componentes/Producto'
import { listaDePedidos } from './componentes/Producto'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App () {
    return(
        <>
            <Nav></Nav>
            <main>
                <h1 id='comida' >Comida <i class='bi bi-egg-fried'></i></h1>
                <div id='comida-container' className='container-fluid d-flex row' >
                    <Producto nombre={'Pan'} precio={'200$'} alt={'pan'} url={'pan.png'} ></Producto>
                    <Producto nombre={'Galletas'} precio={'220$'} alt={'galletas'} url={'galletas.png'}></Producto>
                    <Producto nombre={'Galleticas'} precio={'50$'} alt={'galleticas'} url={'galleticas.png'}></Producto>
                    <Producto nombre={'Palitroque'} precio={'220$'} alt={'Palitroque'} url={'palitroque.png'}></Producto>
                    <Producto nombre={'Arroz con leche'} precio={'1100$'} alt={'Arroz con leche'} url={'arroz-con-leche.png'}></Producto>
                    <Producto nombre={'Galletas'} precio={'220$'} alt={'Galletas'} url={'galletas.png'}></Producto>
                    <Producto nombre={'Palitroque'} precio={'220$'} alt={'Palitroque'} url={'palitroque.png'}></Producto>
                    <Producto nombre={'Pan'} precio={'200$'} alt={'asd'} url={'pan.png'}></Producto>
                </div>
                <h1 id='bebida'>Bebida <i class='bi bi-cup-straw'></i></h1>
                <div id='bebida-container' className='container-fluid d-flex row'>
                    <Producto nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto>
                    <Producto nombre={'Cerveza'} precio={'200$'} alt={'Cerveza'} url={'cerveza.png'}></Producto> 
                </div >
                <h1 id='aseo'>Aseo<i class='bi bi-stars'></i></h1>
                <div id='aseo-container' className='container-fluid d-flex row'>
                    <Producto nombre={'Papel'} precio={'130$'} alt={'Papel'} url={'papel.png'}></Producto>
                    <Producto nombre={'Detergente'} precio={'800$'} alt={'detergente'} url={'detergente.png'}></Producto>
                    <Producto nombre={'Shampoo'} precio={'350$'} alt={'Shampoo'} url={'shampoo.png'}></Producto>
                    <Producto nombre={'Pasta'} precio={'100$'} alt={'pasta'} url={'pasta.png'}></Producto>
                </div>
            </main>
        </>
    )
}

export default App