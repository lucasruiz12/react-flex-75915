import './Item.css';

function Item({ id, nombre, precio, usarFiltro }) {

    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    return (
        <div className="card">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
            <button disabled={!nombre} className="card-btn" onClick={() => usarFiltro("Detalle", id)}>Ver detalle</button>
        </div>
    );
};

export default Item;