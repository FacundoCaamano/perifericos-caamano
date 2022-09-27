import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = ()=>{
    return(
        <div className='icono-contenedor'>
            <FontAwesomeIcon className="icono-contenedor-svg" icon={faShoppingCart} />
            <span>Carro</span>
        </div>
    )
}