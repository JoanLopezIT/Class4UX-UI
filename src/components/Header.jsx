import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src="./logo.png" alt="Logo"/>
            </Link>
            <form>
                <input type="text" placeholder="Buscar..."/>
            </form>
            <Link to="/cart">
                <img src="./cart.png" alt="Cart" />
            </Link>
            <img src="./user.svg" alt="User" />

        </header>
    )
}

export default Header;