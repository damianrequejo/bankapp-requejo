import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const unicoProducto = products.find((prod) => prod.id === Number(id)
                );
                setTimeout(() => {
                    res(unicoProducto);
                }, 500);
            });
        
        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
