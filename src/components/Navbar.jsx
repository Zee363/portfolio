import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
    <header>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-link px-2 text-white"><Link to={'/'}>Home</Link></li>
          <li className="nav-link px-2 text-white"><a href='/#projects'>Projects</a></li>
          <li className="nav-link px-2 text-white"><a href='/#about'>About</a></li>
          <li className="nav-link px-2 text-white"><a href='/#contact'>Contact</a></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-primary" style={{marginTop: "9px"}} onClick={() => window.location.href = "mailto:zinhle.nhlapo31@gmail.com"}>Contact Me</button>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
}

export default Navbar;