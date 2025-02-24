import './ItemDetail.css';

function ItemDetail({ item, usarFiltro }) {

    const { id, nombre, precio, oferta, descripcion, stock } = item;

    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    return (
        <div className="card-detail">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <p>Descripción: {descripcion}</p>
            {
                stock > 0 ?
                <p>Quedan {stock} unidades</p>
                :
                <p>Producto agotado!</p>
            }
            {
                oferta && <p><b>PRODUCTO EN OFERTA</b></p>
                // oferta ? <p><b>PRODUCTO EN OFERTA</b></p> : null
            }
            <button disabled={stock === 0} className="card-detail-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
            <button disabled={!nombre} className="card-detail-btn" onClick={() => usarFiltro("Todos")}>Volver al inicio</button>
        </div>
    );
};

export default ItemDetail;