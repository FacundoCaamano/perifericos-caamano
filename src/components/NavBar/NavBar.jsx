import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink , Link } from 'react-router-dom'
export const NavBar=() =>{
    return (
        <nav className="navegacion">
            <NavLink to='/'><img className="logo" src="https://cdn-icons-png.flaticon.com/512/2868/2868132.png" alt="logo" /></NavLink>
            <ul className="list">
                <li>
                    <NavLink className="btnsNavegacion" to='/'>inicio</NavLink>
                </li>
                <li>
                    <NavLink className="btnsNavegacion" to='/category/mouse'>Mouse</NavLink>
                </li>
                <li>
                    <NavLink className="btnsNavegacion" to='/category/teclado'>Teclados</NavLink>
                </li>
                <li>
                    <NavLink className="btnsNavegacion" to="/category/auriculares">Auriculares</NavLink>
                </li>
                <li>
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}