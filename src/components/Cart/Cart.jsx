import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, clear, removeItem, totalPrice, totalQuantity } = useContext(CartContext);

    const total = totalPrice();
    const cantidadTotal = totalQuantity();

    if (cart.length === 0) {
        return <h1>La billetera está vacía.</h1>;
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
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio: ${prod.price}.-</h3>
                    <button onClick={() => removeItem(prod.id)}>Delete</button>
                </div>
            ))}
            <button onClick={clear}>Vaciar billetera</button>
            <h4>Precio Total: ${total}</h4>
            <h4>Total de Productos: {cantidadTotal}</h4>
        </div>
    );
};

export default Cart;