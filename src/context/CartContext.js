import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            totalQuantitySingleProduct(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // controla si el producto ya está en la billetera (isInCart)
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //sumar cantidad del mismo producto
    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //calcular total de unidades para el cart widget
    const totalQuantity = () => {
        let acumulaCantidad = 0;
        cart.forEach((prod) => {
            acumulaCantidad += prod.cantidad;
        })
        return acumulaCantidad;
    };

    //calcular total precio del carrito
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    //eliminar un solo producto pasandole el id
    const removeItem = (id) => {
        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar toda la billetera
    const clear = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
        //optional chaining
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                clear,
                removeItem,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;