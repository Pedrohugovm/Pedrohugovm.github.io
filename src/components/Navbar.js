import '../App.css';
import React from 'react';
import logo from "../logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Início</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Sobre</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Experiência</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Projetos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contato</a>
      </li>
    </ul>
  </div>
<div className="container"></div> 
</nav>
    )
}

export default Navbar
