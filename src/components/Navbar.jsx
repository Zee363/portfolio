import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
    <header>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-link px-2 text-white"><Link to={'/'}>Home</Link></li>
          <li class="nav-link px-2 text-white"><Link to={'/projects'}>Projects</Link></li>
          <li class="nav-link px-2 text-white"><Link to={'/about'}>About</Link></li>
          <li class="nav-link px-2 text-white"><Link to={'/contact'}>Contact</Link></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-primary" style={{marginTop: "9px"}}>Contact Me</button>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
}

export default Navbar;