import React from "react";
import "../HojasDeEstilo/Proyectos.css"

function Proyectos (props){
  return(
    <div className="col-12 col-md-6 col-lg-4 div-Proyectos-Individual">
      <div className="proyecto">
        <img src={require(`../Imagenes/${props.imagen}.png`)} alt="Proyecto 1" />
        <div className="overlay">
          <p>{props.proyecto}</p>
          <div className="iconos-contenedor">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.freecodecamp.org/espanol/" target="_blank" rel="noopener       noreferrer">
              <i className="bi bi-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos