import React from "react";
import "../HojasDeEstilo/Hero.css"

function Hero (){
  return(
    <section className="hero-section align-items-stretch text-center text-white">
    <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
      <img className="img-perfil" src={require("../Imagenes/FotoPerfil.Png")} alt="" />
      <h1>¡Hola! Soy Mario</h1>
      <h2> 
        Programador junior FrontEnd con amplios conocimiento
        en las tres areas fundamentales del desarrollo web.
      </h2> 
    </div>
  </section>
  )
}

export default Hero