import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom'
export const NavBar=() =>{
    return (
        <nav className="navegacion">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2868/2868132.png" alt="logo" />
            <ul className="list">
                <li>
                    <NavLink to='/'>inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/category/mouse'>Mouse</NavLink>
                </li>
                <li>
                    <NavLink to='/category/teclado'>Teclados</NavLink>
                </li>
                <li>
                    <NavLink to="/category/auriculares">Auriculares</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    )
}