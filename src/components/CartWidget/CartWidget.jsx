import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = ({contador})=>{
    return(
        <div className='icono-contenedor'>
            <FontAwesomeIcon className="icono-contenedor-svg" icon={faShoppingCart} />
            <span>Carros{contador}</span>
        </div>
    )
}