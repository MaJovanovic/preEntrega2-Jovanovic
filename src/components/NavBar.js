import React from 'react';
import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to = "/" className="navbar-brand">TIENDA MERY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to= "/" className="nav-link active" aria-current="page" >Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to = "/categoria/alimentos" className="nav-link" >Comida para gatos</Link>
            </li>
            <li className="nav-item">
              <Link to = "/categoria/juguetes" className="nav-link" >Juguetes</Link>
            </li>
            <li className="nav-item">
              <Link to = "/categoria/rascadores" className="nav-link" >Rascadores</Link>
            </li>
            
          </ul>
        </div>
        <div className= "align-item-center">
          <img src= "carrito.png" alt="Carro" width="50" height="30" />
          <CartWidget cantidad={1} />
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
