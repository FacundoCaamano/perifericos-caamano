import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
export const ItemListContainer=({greeting})=>{

    const onAdd =(quantity)=>{
      console.log(`compraste ${quantity} unidades`)
    }   

    return(
        <div className="contenedor-productos">
            {greeting}
            <div className="contenedor-boton">
              <ItemCount initial={1} stock={20} onAdd={onAdd}/>
            </div>      
        </div>
    )
}