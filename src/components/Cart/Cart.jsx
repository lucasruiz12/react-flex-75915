import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

function Cart() {

    const { carrito, eliminarProducto, limpiarCarrito } = useAppContext();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {carrito.length > 0 ?
                <>
                    {carrito.map(el => {
                        return (
                            <div key={el.id} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "solid 1px gray" }}>
                                <p>{el.nombre}</p>
                                <p>${el.precio}</p>
                                <p>Cantidad: {el.cantidad}</p>
                                <p>Subtotal: ${el.cantidad * el.precio}</p>
                                <button onClick={() => eliminarProducto(el.id)}>Eliminar del carrito</button>
                            </div>
                        )
                    })}
                    <p>Total: ${carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)}</p>
                    <button onClick={() => limpiarCarrito()}>Limpiar carrito</button>
                    <Link to="/checkout">
                        <button>Finalizar compra</button>
                    </Link>
                </>
                :
                <p>Carrito vacío</p>
            }
        </div >
    );
};

export default Cart;