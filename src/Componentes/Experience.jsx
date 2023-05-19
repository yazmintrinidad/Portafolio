import React from "react";
import "../HojasDeEstilo/Experience.css"

function Experience (){
  return(
    <section className="container experience text-center text-white">
      <div className="row">
        <div className="col-12 col-md-4 div-Experience-Individual">
          <i className="bi bi-laptop logo-experience"></i>
          <h1>My experience</h1>
          <h6>Responsable del mantenimiento de la infraestructura de sistemas de la empresa.
Realicé actualización de la documentación , cumpliendo con el 100% de mis fechas de entrega.</h6>
          <button type="button" className="btn btn-danger boton-about-me">Html</button>
          <button type="button" className="btn btn-danger boton-about-me">Css</button>
          <button type="button" className="btn btn-danger boton-about-me">JavaScript</button>
        </div>
        <div className="col-12 col-md-4 div-Experience-Individual">
          <i className="bi bi-laptop logo-experience"></i>
          <h1>My experience</h1>
          <h6>Responsable del mantenimiento de la infraestructura de sistemas de la empresa.
Realicé actualización , cumpliendo con el 100% de mis fechas de entrega.</h6>
          <button type="button" className="btn btn-danger boton-about-me">Html</button>
          <button type="button" className="btn btn-danger boton-about-me">Css</button>
          <button type="button" className="btn btn-danger boton-about-me">JavaScript</button>
        </div>
        <div className="col-12 col-md-4 div-Experience-Individual">
          <i className="bi bi-laptop logo-experience"></i>
          <h1>My experience</h1>
          <h6>Responsable del mantenimiento de la infraestructura de sistemas de la empresa.
Realicé actualización , cumpliendo con el 100% de mis fechas de entrega.</h6>
          <button type="button" className="btn btn-danger boton-about-me">Html</button>
          <button type="button" className="btn btn-danger boton-about-me">Css</button>
          <button type="button" className="btn btn-danger boton-about-me">JavaScript</button>
        </div>
      </div>
    </section>
  )
}

export default Experience