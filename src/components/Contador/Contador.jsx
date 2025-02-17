import { useState } from 'react';
import './Contador.css';

function Contador() {

    // Hook de estado o useState: los hooks son funciones de React para facilitar funcionalidades.

    // const estado = useState() nos devuelve un array. En la primera posición (0) me devuelve el estado. En la segunda posición me da la función "setter". Es decir, la función que va a modificar el estado

    // const [nombreDelEstado, setNombreDelEstado] = useState(estadoInicial); // useState genérico.

    // const estado = useState(58);

    // const numero = estado[0];
    // const cambiarNumero = estado[1];

    const [numero, setNumero] = useState(5);

    // const modificarNumero = (operacion) => {
    //     if(operacion === "+"){
    //         setNumero(numero + 1);
    //     } else {
    //         setNumero(numero - 1);
    //     };
    //     // document.getElementById("numero").innerText = numero; // Esto ya no se hace de esta manera;
    // };

    return (
        <div className="contador-container">
            <h1>Contador</h1>
            <div className="buttons-container">
                <button className="btn-modify" onClick={() => setNumero(numero - 1)}>-</button>
                <p id="numero">{numero}</p>
                <button className="btn-modify" onClick={() => setNumero(numero + 1)}>+</button>
            </div>
        </div>
    );
};

export default Contador;