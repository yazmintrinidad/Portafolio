import React from "react";
import "../HojasDeEstilo/Testimonios.css"

function Testimonios (props){
  return(
  <div className={`carousel-item ${props.active}`} data-bs-interval="10000">
    <div className="container text-center">
      <img className="testimonio-imagen rounded-circle" src={require(`../Imagenes/${props.imagen}.png`)} alt="" />
      <p className="testimonio-texto">
      Ser programador estaba, y sigue estando, de moda. A muchos les fascina la idea de trabajar en el sector tecnológico, cambiar de empleo a uno con mejor condiciones laborales: horario flexible, posibilidad de trabajar en remoto, salarios más altos como programador. Además siempre nos encontramos con noticias en donde se necesita programador y por eso nos preguntamos si es difícil programar.
      </p>
      <div className="testimonio-info">
        <p className="cliente">{props.nombre}</p>
      </div>  
    </div>
  </div>

  
  )
}

export default Testimonios