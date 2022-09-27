import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar=() =>{
    return (
        <nav className="navegacion">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/2868/2868132.png" alt="logo" />
            <ul className="list">
                <li><a href="/">inicio</a></li>
                <li><a href="/">Mouse</a></li>
                <li><a href="/">Teclados</a></li>
                <li><a href="/">Auriculares</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}