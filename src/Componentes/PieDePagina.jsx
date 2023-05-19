import React from "react";
import "../HojasDeEstilo/PieDePagina.css";

function PieDePagina(){
  return(
    <footer class="container text-center footer text-white">
    <h1 id="contacto">Redes de contacto</h1>
    <i class="bi bi-twitter"></i>
    <a href="https://github.com/yazmintrinidad" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
    <a href="https://www.facebook.com/yazmintrinidad.floreszunagua" target="_blank" rel="noopener noreferrer">
    <i class="bi bi-facebook"></i>
    </a>
    <a href="https://api.whatsapp.com/send?phone=59163702027" target="_blank" rel="noopener noreferrer">
    <i class="bi bi-whatsapp"></i>
    </a>
    
    <h3>Yazmin Flores</h3>
    </footer>
  )
}
export default PieDePagina