import React from 'react'
import './main.css';

const Main = (props) => {
  return (
    <main>
        <section>
            <h2>Bienvenido al Main de {props.test}</h2>
        </section>
    </main>
  )
}

export default Main