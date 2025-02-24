import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';

function ItemListContainer({ greetings }) {

    const [todosLosProductos, setTodosLosProductos] = useState([]); // Este estado solo me va a servir como una especie de base de datos local en mi proyecto para no tener que seguir solicitando infinitas veces de acuerdo a los filtros que aplique. Si aplico el filtro de no mostrar productos, eventualmente puedo perder esa información. Así que acá tenemos un backup
    const [misProductos, setMisProductos] = useState([]); // Los productos que vamos a mostrar
    const [loading, setLoading] = useState(true);
    const [detalleFiltrado, setDetalleFiltrado] = useState(false);

    const usarFiltro = (filtro, id) => {
        switch (filtro) {
            case "Ninguno":
                setDetalleFiltrado(false);
                setMisProductos([]);
                break;
            case "Todos":
                setDetalleFiltrado(false);
                setMisProductos(todosLosProductos);
                break;
            case "Baratos":
                setDetalleFiltrado(false);
                setMisProductos(todosLosProductos.filter(el => el.precio < 100).sort((a, b) => a.precio - b.precio));
                break;
            case "Caros":
                setDetalleFiltrado(false);
                setMisProductos(todosLosProductos.filter(el => el.precio >= 100).sort((a, b) => a.precio - b.precio));
                break;
            case "Detalle":
                setDetalleFiltrado(true);
                setMisProductos(todosLosProductos.filter(el => el.id === id));
                break;

            default:
                break;
        };
    };

    // Hook de efectos: 

    useEffect(() => {
        fetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
            .catch(err => console.error(err));

        // fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));

        // getAPI("https://jsonplaceholder.typicode.com/todos").then(data => console.log(data));

        // postAPI("https://jsonplaceholder.typicode.com/posts", {
        //     title: "Custom task",
        //     userId: 2,
        //     body: "To complete"
        // }).then(data => console.log(data));

    }, []);

    return (
        <>
            <h1>{greetings}</h1>
            <hr />
            {
                !detalleFiltrado &&
                <div className="container-filter">
                    <button onClick={() => usarFiltro("Todos")}>Todos</button>
                    <button onClick={() => usarFiltro("Baratos")}>Baratos</button>
                    <button onClick={() => usarFiltro("Caros")}>Caros</button>
                    <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
                </div>
            }
            <div className="container-cards">
                {
                    loading ? <Loader /> :
                        detalleFiltrado ? <ItemDetail item={misProductos[0]} usarFiltro={usarFiltro} /> :
                            misProductos.map((el, index) => {
                                return (
                                    <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} usarFiltro={usarFiltro} />
                                );
                            })
                }
            </div>
        </>
    );
};

export default ItemListContainer;