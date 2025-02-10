import './Item.css';

function Item({ nombre, precio }) {

    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    return (
        <div className="card">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    );
};

export default Item;