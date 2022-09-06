import React, {useState} from 'react'

const ItemCount = (props) => {

    const[count, setCount] = useState(props.initial);
  
    const sumaCantidad = () => {
        if (count < props.stock) {
            setCount(count + 1); 
        } else {
            alert("No hay stock de este producto")
        }
    }

    const restaCantidad = () => {
        if (count > props.initial) {
            setCount(count - 1);
        } else {
            alert("La cantidad mímima es ...")
        }
    }

    const onAdd = () => {
        if (count <= props.stock) {
            alert("Se agrego el producto a la billetera")
            //bajaStock
        } else {
            alert("No hay stock de este prodcuto")
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
                <button onClick={onAdd}>Agregar a la billetera</button>
            </p>
            
        </div>
  )
}

export default ItemCount