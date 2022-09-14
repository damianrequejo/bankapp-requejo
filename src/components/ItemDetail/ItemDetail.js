import React, {useState} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/ItemCount';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(CartContext);
    
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addItem(item, cantidadItem);
    };

    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <h4>{item.category}</h4>
                <h4>$ {item.price}</h4>
                {cantidad === 0 ? <Counter stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to="/cart">Ir a la Billetera</Link>}
            </div>
        </div>
    );
};

export default ItemDetail;