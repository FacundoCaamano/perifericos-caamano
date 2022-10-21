import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const ItemDetail=({data})=>{

    const {addProduct}=useContext(CartContext)
    

    const addProducto=(quantity)=>{
        
        console.log(quantity)
        addProduct(data,quantity)
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
                    <ItemCount stock={10} initial={1} onAdd={addProducto}/>
                    
                </div>
            </div>
        </div>
    )
}