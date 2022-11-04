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
        <div className="contenedor">
            <div className="contenedor--boton">
                <button disabled={contador >=stock} onClick={incrementarContador}className='contenedor--boton__btns'>+</button>
                <span>{contador}</span>
                <button disabled={contador <=1} onClick={decrementarContador}className='contenedor--boton__btns'>-</button>
                <div>
                    <button disabled={stock<=0} onClick={()=>onAdd(contador)}className='contenedor--boton__btns'>agregar al carrito</button>
                </div>  

            </div>
        </div>
    )
}