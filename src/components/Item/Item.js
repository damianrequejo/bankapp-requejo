import React from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';

const item = ({item}) => {
  return (
    <div className={estilos.card}>
      <img src={item.img} alt="" />
      <div className={estilos.info}>
        <h2>{item.title}</h2>
        <h4>${item.price}.-</h4>
        <h5>{item.category}.-</h5>
        <Link to={`/item/${item.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  )
}

export default item;