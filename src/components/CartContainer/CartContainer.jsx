import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartContainer =()=>{
    const value =useContext(CartContext)
    const {productosCarrito}=value
    console.log(productosCarrito)
    return(
    <div>
        <p>pagina de carrito</p>
        <div>
            {
                productosCarrito.map((producto)=>(
                    <div>
                        <h3>id:{producto.id}</h3>
                        <img style={{width:300}} src={producto.img} alt="foto produucto"/>
                        <h2>marca y modelo :{producto.marca} {producto.modelo}</h2>
                        <h3>cantidad :{producto.quantity}</h3>
                    </div>
                ))
            }
        </div>
    </div>
    )
}