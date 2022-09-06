import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
        const prodFiltrados = products.filter( (prod) => prod.category === id);
        
        setTimeout(() => {
            res(id ? prodFiltrados : products);
            }, 500);
        });

        getProducts
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                //console.log('Finally');
            });
    }, [id]);

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>

    );
};

export default ItemListContainer;