import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        
        <Link to="/" className="nav-link" aria-current="page" ><img src="bankapp.png" alt="" width="24" height="24" class="d-inline-block align-text-top"/> BankApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/premium" className="nav-link active" aria-current="page" >Premium</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/classic" className="nav-link" aria-current="page" >Classic</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/corporate" className="nav-link" aria-current="page" >Corporate</Link>
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