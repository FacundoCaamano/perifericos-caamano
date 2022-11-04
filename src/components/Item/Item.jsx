import "./Item.css"
import {Link} from 'react-router-dom'
export const Item =({info})=>{
    return(
        <Link to={`/item/${info.id}`} className="contenedor__card">
            <div className="contenedor__producto--foto">
                <img className="producto__foto" src={info.img} alt="" />
            </div>
            <div className="contenedor__producto">
                <p className="contenedor__producto--info">Marca:  {info.marca} </p>
                <p className="contenedor__producto--info">Modelo:  {info.modelo}</p>
                <p className="contenedor__producto--info">$ {info.price}</p>
            </div>
        </Link>
    )
    
}