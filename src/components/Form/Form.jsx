import {
    addDoc,
    collection,
    serverTimestamp,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';


const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido, mail: mail },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'ordenes');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
        });
    };

    const handleChangeNombre = (event) => {
        //console.log(event.target.value);
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <input
                    type="text"
                    placeholder="Mail..."
                    name="mail"
                    value={mail}
                    onChange={handleChangeMail}
                />
                
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;