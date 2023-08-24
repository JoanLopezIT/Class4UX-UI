import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header>
            <Link to="/">
                <img src="./logo.png" alt="Logo" id="logo"/>
            </Link>
            <form>
                <input type="text" placeholder="Buscar..."/>
            </form>
            <div>
                <Link to="/cart">
                    <img src="./cart.png" alt="Cart" />
                </Link>
                <img src="./user.svg" alt="User" />
            </div>

        </header>
    )
}

export default Header;