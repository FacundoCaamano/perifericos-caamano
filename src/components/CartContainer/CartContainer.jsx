import { useContext,useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"


export const CartContainer =()=>{
    const value =useContext(CartContext)
    const {productosCarrito,getTotalPrice, getTotalProducts,removeItem}=value;
    const [compraId,setCompraId]=useState('')

    
    const sendOrden=(evt)=>{
        evt.preventDefault();
        const compra ={
            buyer:{
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,
                direccion:evt.target[3].value
            },
            items: productosCarrito,
            total: getTotalPrice()
        }
        //crear referencia
        const queryRef=collection(db,"orders")
        //informacion que vamos a agregar
        addDoc(queryRef, compra).then((resultado)=>{
            console.log(resultado)
            setCompraId(resultado.id)
        })


    }

    return(
    <div>
        <p>pagina de carrito</p>
        <div>
            {
                productosCarrito.map((producto)=>(
                    <div key={producto.id}>
                        <h3>id:{producto.id}</h3>
                        <img style={{width:300}} src={producto.img} alt="foto produucto"/>
                        <h2>marca y modelo :{producto.marca} {producto.modelo}</h2>
                        <h3>cantidad :{producto.quantity}</h3>
                        <p>Precio por cantidad: {producto.quantityPrice} </p>
                        <button onClick={()=>removeItem(producto.id)}>x</button>
                    </div>
                ))
            }
            <p><strong>Precio total:</strong>{getTotalPrice()}</p>
            <p><strong>Cantidad de productos:</strong>{getTotalProducts()}</p>
            <form onSubmit={sendOrden}>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />
                <label>Telefono</label>
                <input type="number" placeholder="Numero de telefono" />
                <label>Correo</label>
                <input type="email" placeholder="Ingrese su Email" />
                <label>Direccion</label>
                <input type="direccion" placeholder="Direccion de envio" />
                <button type="submit">Enviar</button>

            </form>
            <div>
                {compraId && <h3>el id de su compra es {compraId}</h3>}
                       
            </div>
        </div>
    </div>
    )
}