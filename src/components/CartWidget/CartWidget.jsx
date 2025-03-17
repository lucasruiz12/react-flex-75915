import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './CartWidget.css';

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <Link to="/cart">
            <p>Icono carrito ({carrito.length})</p>
        </Link>
    );
};

export default CartWidget;