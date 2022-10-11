import "./Item.css"
import {Link} from 'react-router-dom'
export const Item =({info})=>{
    return(
        <Link to={`/item/${info.id}`} className="contenedor__card">
            <img className="producto__foto" src={info.img} alt="" />
            <p className="porducto__nombre">{info.marca} {info.modelo}</p>
        </Link>
    )
    
}