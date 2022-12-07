import './assets/App.css'

function App() {

  return (
    <div className="App">

      <div className="header-name">
        <div className="info-name">
          <h1 className="name">Andrés Guizar Gómez</h1>
          <h2 className="seniority">Desarrollo de Software</h2>
        </div>
        <div className="own-image"></div>
      </div>

      <div className="body">

        <div className="body-col-one">
          <h1 className="title-sector">Educación</h1>

          <div className="info-card">
            <h1 className="title-card">Universidad Politécnica de Chiapas</h1>
            <span className="content-card">En proceso de carrera, cursando el 4to cuatrimestre de la carrera</span>
            <p className="time-card">2021-2022</p>
          </div>

          <div className="info-card">
            <h1 className="title-card">Google Activate</h1>
            <span className="content-card">Curos de Introducción al Desarrollo Web: HTML y CSS (1/2)</span>
          </div>

          <div className="info-card">
            <span className="content-card">Certificación de Google, hecha para
              aprender a crear tus propias páginas
              web profesionales adaptables a
              distintos dispositivos de la mano
              de la Universidad de Alicante.</span>
          </div>

          <h1 className="title-sector">Habilidades</h1>
          <ul>
            <li className="list-card">&nbsp;&nbsp; - Toma de decisiones</li>
            <li className="list-card">&nbsp;&nbsp; - Pensamiento crítico</li>
            <li className="list-card">&nbsp;&nbsp; - Pensamiento creativo</li>
            <li className="list-card">&nbsp;&nbsp; - Respeto</li>
            <li className="list-card">&nbsp;&nbsp; - Trabajo en equipo</li>
            <li className="list-card">&nbsp;&nbsp; - Comunicación</li>
          </ul>
          <h1 className="title-sector">Lenguajes</h1>
          <span className="content-card">ESPAÑOL 100%</span><br />
          <span className="content-card">INGLES 25%</span>
        </div>

        <div className="body-col-two">
          <h1 className="title-sector">Experiencia</h1>
          <div className="info-card">
            <h2 className="subtitle-sector">SISTEMA DE SALA DE ESPERA</h2>
            <h1 className="title-card-op">Car Clean Code</h1>
            <p className="time-card">2022</p>
            <span className="content-card">Se desarrollo un sistema de gestión de turnos para un autolavado, para así brindarle al usuario final gran comodidad y facilidad a la hora de esperar por su vehículo.</span>
          </div>
          <div className="info-card">
            <h2 className="subtitle-sector">TIENDA ONLINE</h2>
            <h1 className="title-card-op">Vms Tintas y Consumibles</h1>
            <p className="time-card">2022</p>
            <span className="content-card">Se encuentra en proceso el desarrollo de una página web en el que se pretender incentivar a los clientes de la empresa a comprar con más facilidad (Existencias del producto, precio actual etc...)</span>
          </div>
          <div className="info-card">
            <h2 className="subtitle-sector">PAGINA WEB INFORMATIVA</h2>
            <h1 className="title-card-op">Dra. Wendy Janet Guizar</h1>
            <p className="time-card">2022</p>
            <span className="content-card">Se encuentra en proceso el desarrollo de una página web en el que se pretender incentivar a los clientes de la doctora a pedirle sus servicios</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
