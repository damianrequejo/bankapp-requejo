import React, {useState} from 'react'

const ItemCount = ({ stock, onAdd, initial }) => {
    const[count, setCount] = useState(initial);
  
    const sumaCantidad = () => {
        if (count < stock) {
            setCount(count + 1); 
        } else {
            alert("No hay stock de este producto")
        }
    }

    const restaCantidad = () => {
        if (count > initial) {
            setCount(count - 1);
        } else {
            alert("La cantidad mímima es ...")
        }
    }

    return (
        <div>
            <p>
                <button onClick={sumaCantidad}>+</button>
                {count}
                <button onClick={restaCantidad}>-</button>
            </p>
            <p>
                <button onClick={()=> onAdd(count)}>Agregar a la billetera</button>
            </p>
            
        </div>
  )
}

export default ItemCount;