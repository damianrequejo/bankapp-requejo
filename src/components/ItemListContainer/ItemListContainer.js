import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const itemCollection = collection(db,"productos");
        if (id) {
            const q = query(itemCollection, where("category","==", id));
            getDocs(q)
            .then((res)=>{
                const products = res.docs.map((prod)=>{
                    return { 
                        id: prod.id,
                        ...prod.data()
                    }
                });
                setItems(products);
            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                //console.log('Finally');
            });
                
        } else {
            getDocs(itemCollection)
            .then((res)=>{
                const products = res.docs.map((prod)=>{
                    return { 
                        id: prod.id,
                        ...prod.data()
                    }
                });
                setItems(products);
            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                //console.log('Finally');
            });
        }
    }, [id]);

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
        >
            <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
            <ItemList items={items} />
        </div>

    );
};

export default ItemListContainer;