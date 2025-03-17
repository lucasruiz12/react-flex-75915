import { useAppContext } from '../../context/context';
import './Contador.css';

function Contador({stock}) {

    const {contador, setContador} = useAppContext();

    return (
        <div className="contador-container">
            <div className="buttons-container">
                <button disabled={contador === 1} className="btn-modify" onClick={() => setContador(contador - 1)}>-</button>
                <p id="numero">{contador}</p>
                <button disabled={contador === stock} className="btn-modify" onClick={() => setContador(contador + 1)}>+</button>
            </div>
        </div>
    );
};

export default Contador;