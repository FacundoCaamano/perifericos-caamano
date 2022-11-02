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
            <img src={data.img} alt="" />
            <div className="detalles__productos">
                <div className="detalles__productos--info">
                    <div className="etiquetas">
                        <h2>Marca: </h2>
                        <h3>Modelo: </h3>
                        <h3>Categoria: </h3>
                    </div>
                    <div className="datos">
                        <p>{data.marca}</p>
                        <p>{data.modelo}</p> 
                        <p>{data.categoria}</p>  
                    </div>
                    
                    {
                        goToCart ? <Link to='/cart'>Ir al carro</Link>: <ItemCount stock={10} initial={1} onAdd={addProducto}/>
                    }
                </div>
            </div>
        </div>
    )
}