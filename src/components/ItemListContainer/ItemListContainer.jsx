import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]); // Este estado solo me va a servir como una especie de base de datos local en mi proyecto para no tener que seguir solicitando infinitas veces de acuerdo a los filtros que aplique. Si aplico el filtro de no mostrar productos, eventualmente puedo perder esa información. Así que acá tenemos un backup
    const [misProductos, setMisProductos] = useState([]); // Los productos que vamos a mostrar
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        if (todosLosProductos.length === 0) {
            fetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) {
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                    setLoading(false);
                } else {
                    setMisProductos(response);
                    setLoading(false);
                };
            })
                .catch(err => console.error(err));
        } else {
            if (categoria) {
                const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(todosLosProductos);
            };
        }

    }, [categoria]);

    return (
        <>
            <div className="container-cards">
                {
                    loading ? <Loader /> :
                        misProductos.map((el, index) => {
                            return (
                                <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} />
                            );
                        })
                }
            </div>
        </>
    );
};

export default ItemListContainer;