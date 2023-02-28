import React from "react";

function Nav (){
  return(
    <nav className="navbar navbar-expand-md ">
    <div className="container-fluid">
      <button className="navbar-toggler text-white bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbar-toggler">
        <a className="navbar-brand text-white" href="#">  
          <img src={require("../Imagenes/Logo.Png")}  width="50" alt="" />
        </a>
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <a className="nav-link active text-white" href="#About-me">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#proyectos">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contacto">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav;