import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetings}) {
    return (
        <>
        <h1>{greetings}</h1>
        <div className="container-cards">
            <Item nombre={"Producto 1"} precio={100} color="red" />
            <Item nombre={"Producto 2"} precio={150} />
            <Item nombre={"Producto 3"} precio={75} />
        </div>
        </>
    );
};

export default ItemListContainer;