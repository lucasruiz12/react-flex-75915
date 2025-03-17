import { useState } from 'react';
import { useAppContext } from '../../context/context';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
    });

    const modificarInput = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const crearOrden = (e) => {
        e.preventDefault();
        console.log("Orden creada", formData);
        setFormData({
            nombre: "",
            correo: "",
            telefono: "",
        });

        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <form onSubmit={crearOrden}>
                <input type="text" placeholder='Nombre' name="nombre" value={formData.nombre} onChange={modificarInput} />
                <input type="text" placeholder='Correo' name="correo" value={formData.correo} onChange={modificarInput} />
                <input type="text" placeholder='Teléfono' name="telefono" value={formData.telefono} onChange={modificarInput} />
                <input type="submit" value="Enviar" />
            </form>
        </div >
    );
};

export default Checkout;