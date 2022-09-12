import React, {useState} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
//import ItemCount from '../Counter/ItemCount';
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
                <h3>{item.title}</h3>
                <h3>{item.category}</h3>
                <h3>$ {item.price}</h3>
                {cantidad === 0 ? <Counter stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to="/cart">Ir a la Billetera</Link>}
            </div>
        </div>
    );
};

export default ItemDetail;