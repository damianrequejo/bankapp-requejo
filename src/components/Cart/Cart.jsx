import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, clear, removeItem, totalPrice, totalQuantity } = useContext(CartContext);

    const total = totalPrice();
    const cantidadTotal = totalQuantity();

    if (cart.length === 0) {
        return <h4>La billetera está vacía. <Link to="/">Ver productos</Link></h4>;
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        margin: '8px',
                    }}
                >
                    <img src={prod.img} alt={prod.title} width="65px" height="40px"/>
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio: ${prod.price}.-</h3>
                    <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={clear}>Vaciar billetera</button>
            <h4>Precio Total: ${total}</h4>
            <h4>Total de Productos: {cantidadTotal}</h4>
            <button>Finalizar Compra</button>

        </div>
    );
};

export default Cart;