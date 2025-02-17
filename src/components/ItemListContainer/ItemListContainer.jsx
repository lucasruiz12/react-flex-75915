import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

function ItemListContainer({ greetings }) {

    const [todosLosProductos, setTodosLosProductos] = useState([]); // Este estado solo me va a servir como una especie de base de datos local en mi proyecto para no tener que seguir solicitando infinitas veces de acuerdo a los filtros que aplique. Si aplico el filtro de no mostrar productos, eventualmente puedo perder esa información. Así que acá tenemos un backup
    const [misProductos, setMisProductos] = useState([]); // Los productos que vamos a mostrar
    const [loading, setLoading] = useState(true);

    const usarFiltro = (filtro) => {
        switch (filtro) {
            case "Ninguno":
                setMisProductos([]);
                break;
            case "Todos":
                setMisProductos(todosLosProductos);
                break;
            case "Baratos":
                setMisProductos(todosLosProductos.filter(el => el.precio < 100).sort((a, b) => a.precio - b.precio));
                break;
            case "Caros":
                setMisProductos(todosLosProductos.filter(el => el.precio >= 100).sort((a, b) => a.precio - b.precio));
                break;
            default:
                break;
        };
    };

    /*
    
    Situación presentada: en vez de utilizar el estado para tener mi "backup", voy a modificar el estado misProductos utilizando el estado inicial

    Cuando di click en baratos, me trajo los baratos. Pero los caros desaparecieron.
    Cuando di click en caros, buscó los caros, pero los caros ya no están, porque los borré al setear los baratos. Por eso devolvió array vacío.

    ---------------

    Resumen de la clase:

    -useState: hook que nos permite poder crear estados. Los estados son variables que van a ir modificándose y en sus modificaciones también modificamos el DOM.
    -Estado de loading: simulamos el loading a una base de datos cuando hacemos el fetch, utilizando un loading true que luego se setea en false.
    -Fetch de datos: estamos emulando que traemos información de una base de datos aunque realmente lo que estamos haciendo es buscarla localmente con una promesa.
    -useEffect: hook que nos permite ejecutar alguna funcionalidad cada vez que la dependencia pasada en el array se modifique. Si pasamos array vacío, se ejecuta una única vez al montar el componente y no se vuelve a ejecutar. Esto nos permite evitar ejecutar varias veces lo mismo.
    -Map: para mostrar un array en nuestro html tenemos que hacer map, return y lo que queremos retornar. React nos pide que cuando hacemos un map pasemos KEY (si no tenemos id de producto, podemos pasar como key el índice del elemento en su array).
    
    */

    // Hook de efectos: 

    useEffect(() => {
        fetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>{greetings}</h1>
            <hr />
            <div className="container-filter">
                <button onClick={() => usarFiltro("Todos")}>Todos</button>
                <button onClick={() => usarFiltro("Baratos")}>Baratos</button>
                <button onClick={() => usarFiltro("Caros")}>Caros</button>
                <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
            </div>
            <div className="container-cards">
                {
                    loading ? <Loader /> :
                        misProductos.map((el, index) => {
                            return (
                                <Item key={index} nombre={el.nombre} precio={el.precio} />
                            );
                        })
                }
                {/* <Item nombre={"Producto 1"} precio={100} />
            <Item nombre={"Producto 2"} precio={150} />
            <Item nombre={"Producto 3"} precio={75} /> */}
            </div>
        </>
    );
};

export default ItemListContainer;