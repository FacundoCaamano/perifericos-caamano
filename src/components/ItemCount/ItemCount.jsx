import React, { useState } from "react"
import "./ItemCount.css"


export const ItemCount=({initial, stock, onAdd})=>{
    const [contador, setContador] = useState(initial);
    const incrementarContador = () => {
        setContador(contador + 1);
      };
    const decrementarContador=()=>{
        setContador(contador - 1);
    }  
    return(
        <div className="contenedor-boton">
            <button disabled={contador <=1} onClick={decrementarContador}>-</button>
            <span>{contador}</span>
            <button disabled={contador >=stock} onClick={incrementarContador}>+</button>
            <div>
                <button disabled={stock<=0} onClick={()=> onAdd(contador)}>agregar al carrito</button>
            </div>  
        </div>
    )
}