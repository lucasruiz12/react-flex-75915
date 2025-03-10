import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <p>Logo</p>
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">
                        <Link to="/">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/bebida">
                            Bebidas
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/comida">
                            Comida
                        </Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;