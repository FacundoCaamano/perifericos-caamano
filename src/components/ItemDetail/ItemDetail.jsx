import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemDetail=({data})=>{
    const [goToCart,setGoToCart]=useState(false)
    const {addProduct}=useContext(CartContext)
    

    const addProducto=(quantity)=>{
        addProduct(data,quantity)
        setGoToCart(true)
    }
    return(
        <div>
            <img src={data.img} alt="" className="img"/>
            <div className="detalles__productos">
                <div className="detalles__productos--info">
                    <div className="etiquetas">
                        <h3>Marca: </h3>
                        <h3>Modelo: </h3>
                        <h3>Categoria: </h3>
                        <h3>Precio:</h3>
                    </div>
                    <div className="datos">
                        <h3>{data.marca}</h3>
                        <h3>{data.modelo}</h3> 
                        <h3>{data.categoria}</h3> 
                        <h3>${data.price}</h3> 
                    </div>
                    
                    {
                        goToCart ? <Link to='/cart' className="btnIrAlCarro">Ir al carro</Link>: <ItemCount stock={10} initial={1} onAdd={addProducto}/>
                    }
                </div>
            </div>
        </div>
    )
}