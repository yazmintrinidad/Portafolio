import React from "react";
import "../HojasDeEstilo/Hero.css"

function Hero (){
  return(
    <section className="hero-section align-items-stretch text-center text-white">
    <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
      <img className="img-perfil" src={require("../Imagenes/FotoPerfil.jpg")} alt="" />
      <h1>¡Hola! Soy Yazmin</h1>
      
    </div>
  </section>
  )
}

export default Hero