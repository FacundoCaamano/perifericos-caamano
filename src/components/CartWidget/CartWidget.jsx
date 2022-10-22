import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = ()=>{
    const {getTotalProducts}=useContext(CartContext)
    return(
        <div className='icono-contenedor'>
            <FontAwesomeIcon className="icono-contenedor-svg" icon={faShoppingCart} />
            <span>{getTotalProducts()}</span>
        </div>
    )
}