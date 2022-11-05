import "./CartContainer.css"
import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'


export const CartContainer =()=>{
    const value =useContext(CartContext)
    const {productosCarrito,getTotalPrice, getTotalProducts,removeItem,clearCart}=value;
    const [compraId,setCompraId]=useState('')

    const mostrarAlerta=()=>{
        Swal.fire(
            'Listo','Su compra se realizo exitosamente', 'success')
    }

    const sendOrden=(evt)=>{
        mostrarAlerta()
        clearCart()
        evt.preventDefault();
        const compra ={
            buyer:{
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,
                direccion:evt.target[3].value
            },
            items: productosCarrito,
            fecha: Date(),
            total:getTotalPrice()
        }
        //crear referencia
        const queryRef=collection(db,"orders")
        //informacion que vamos a agregar
        addDoc(queryRef, compra).then((resultado)=>{
            
            setCompraId(resultado.id)
        })
        

    }

    if(productosCarrito.length===0){
        return(
            <>
                <p className="carritoVacio">No hay productos en su carro empieza a realizar sus compras :D</p>
                <Link to='/' className="irAlIncio">Ir al inicio</Link>
                {compraId && <h3 className="idCompra">El id de su compra es {compraId}</h3>}
            </>
        )
    }

    return(
    <div>
        <div>
            {
                productosCarrito.map((producto)=>(
                    <div key={producto.id} className='contenedor--productosCarrito'>
                        <div className="productosCarrito">
                            <div className="productosCarrito--img">
                                <img  src={producto.img} alt="foto produucto" className="productosCarrito--img__imagen"/>
                            </div>
                            <div className="productosCarrito--info">
                                <h3>Marca :  {producto.marca} </h3>
                                <h3>Modelo:   {producto.modelo}</h3>
                                <h3>cantidad :  {producto.quantity}</h3>
                                <h3>Precio por cantidad:   ${producto.quantityPrice} </h3>
                                <div>
                                    <button onClick={()=>removeItem(producto.id)}>Eliminar producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button onClick={()=>clearCart()} className='btnVaciar'>Elminar todo</button>
            
                <p className="compra--num"><strong className="compra">Precio total: $</strong>{getTotalPrice()}</p>
                <p className="compra--num"><strong className="compra">Cantidad de productos:</strong> {getTotalProducts()}</p>
            <div className="contenedor--formulario">
                <form onSubmit={sendOrden} className='formulario'>
                    <label className="label">Nombre</label>
                    <input type="text" placeholder="Nombre" required className="input"/>
                    <label className="label">Telefono</label>
                    <input type="number" placeholder="Numero de telefono" required className="input"/>
                    <label className="label">Correo</label>
                    <input type="email" placeholder="Ingrese su Email" required className="input"/>
                    <label className="label">Direccion</label>
                    <input type="direccion" placeholder="Direccion de envio" required className="input"/>
                    <button type="submit" >Enviar</button>
                </form>
            </div>
        </div>
    </div>
    )
}