import React from 'react';
//import ItemCount from '../Counter/ItemCount';
import Counter from '../Counter/ItemCount';

const ItemDetail = ({ item }) => {
    const onAdd = (param) => {
        console.log(param);
    };
    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3>{item.category}</h3>
                <h3>$ {item.price}</h3>
                <Counter stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;