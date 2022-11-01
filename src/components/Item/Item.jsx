import "./Item.css"
import {Link} from 'react-router-dom'
export const Item =({info})=>{
    return(
        <Link to={`/item/${info.id}`} className="contenedor__card">
            <div className="contenedor__producto--foto">
                <img className="producto__foto" src={info.img} alt="" />
            </div>
            <div className="contenedor__producto--info">
                <p className="porducto__nombre">{info.marca} </p>
                <p>{info.modelo}</p>
                <p>{info.price}</p>
            </div>
        </Link>
    )
    
}