import './App.css';
import Nav from './Componentes/Nav';
import Hero from './Componentes/Hero';
import SobreMi from './Componentes/SobreMi';
import Educacion from './Componentes/Educacion';
import Experience from './Componentes/Experience';
import Proyectos from './Componentes/Proyectos';
import Testimonios from './Componentes/Testimonios';
import PieDePagina from './Componentes/PieDePagina';
import Habilidades from './Componentes/Habilidades';

function App() {
  return (
    <div className="App bg-dark ">
        <div className="container">
        {/* Barra de navegacion */}
        <Nav />

        <hr style={{color:"white"}}></hr>

        {/* Hero */}
        <Hero />

        <hr style={{color:"white"}}></hr>

        {/* Sobre mi */}

        <SobreMi />

        <hr style={{color:"white"}}></hr>

         {/* Educacion */}

         <Educacion />

<hr style={{color:"white"}}></hr>

  {/* Habilidades */}

  <Habilidades />

<hr style={{color:"white"}}></hr>


        {/* Experience */}

        <Experience />

        <hr style={{color:"white"}}></hr>

        {/* Proyectos */}

        <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
          <h2 className="seccion-titulo text-white">Mis proyectos recientes</h2>
          <h3 className="seccion-descripcion text-white">Estos son algunos proyectos que he creado recientemente...</h3>
          <div className="container text-center proyectos-contenedor ">
            <div className="row">

            <Proyectos 
              imagen = "proyecto2"
              proyecto = "Proyecto 2"
            />

            <Proyectos 
              imagen = "proyecto3"
              proyecto = "Proyecto 3"
            />

            <Proyectos 
              imagen = "proyecto4"
              proyecto = "Proyecto 4"
            />

            <Proyectos 
              imagen = "proyecto4"
              proyecto = "Proyecto 4"
            />

            <Proyectos 
              imagen = "proyecto5"
              proyecto = "Proyecto 5"
            />

            <Proyectos 
              imagen = "proyecto2"
              proyecto = "Proyecto 6"
            />
                
            </div>
          </div>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-info">
              Ver más proyectos
            </button>
          </a>
        </section>
        
        <hr style={{color:"white"}}></hr>

        {/* Testimonios */}

        <section className="testimonios text-white">
          <h2>Testimonios</h2>
          <h3>Estos son algunos testimonios.</h3>
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
              <Testimonios
                active="active"
                imagen= "cliente1"  
                nombre= "David"
              />

              <Testimonios
                active=""
                imagen= "cliente2"  
                nombre= "Fernanda"
              />

              <Testimonios
                active=""
                imagen= "cliente3"  
                nombre= "Sergio"
              />
            </div>
            <button className="carousel-control-prev" type="button"             data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <hr style={{color:"white"}}></hr>

        {/* Pie de pagina */}

        <PieDePagina />

      </div>
    </div>
  );
}

export default App;
