import React from 'react'
import './navbar.css';
import CartWidget from './CartWindget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link to="/" class="nav-link" aria-current="page" >BankApp</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/category/individuos" class="nav-link active" aria-current="page" >Individuos</Link>
            </li>
            <li class="nav-item">
              <Link to="/category/empresas" class="nav-link" aria-current="page" >Empresas</Link>
            </li>
            <li class="nav-item">
              <Link to="/contacto" class="nav-link" aria-current="page" >Contacto</Link>
            </li>
          </ul>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>    
  )
}

export default Navbar