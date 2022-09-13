import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartwidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{totalQuantity() === 0 ? '' : <span className="material-symbols-rounded">account_balance_wallet {totalQuantity()}</span>}</span>
    </div>
  )
}

export default CartWidget;