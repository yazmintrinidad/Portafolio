import React from "react";
import "../HojasDeEstilo/Testimonios.css"

function Testimonios (props){
  return(
  <div className={`carousel-item ${props.active}`} data-bs-interval="10000">
    <div className="container text-center">
      <img className="testimonio-imagen rounded-circle" src={require(`../Imagenes/${props.imagen}.png`)} alt="" />
      <p className="testimonio-texto">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non corporis explicabo nisi nostrum harum voluptatem totam natus necessitatibus quibusdam voluptatum ex sequi exercitationem sit omnis dolore, ut consectetur veniam!
      </p>
      <div className="testimonio-info">
        <p className="cliente">{props.nombre}</p>
      </div>  
    </div>
  </div>
  )
}

export default Testimonios