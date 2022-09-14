import React from 'react'
import './navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="nav-link" aria-current="page" >BankApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/individuos" className="nav-link active" aria-current="page" >Individuos</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/empresas" className="nav-link" aria-current="page" >Empresas</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" aria-current="page" >Contacto</Link>
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
export default Navbar;