import room from "../assets/room.svg";
import keys from "../assets/keys.svg";
import estudiantes from '../assets/students.svg'
import "../styles/ventana.css";
import { useState } from "react";
import Login from "./Login";
import Registro from "./Registro";

function Ventana() {
  const [login, setLogin] = useState(false) 
  const [registro, setRegistro] = useState(false)

  const showLogin = () => {
    setLogin(true)
  }

  const showRegistro = () => {
    setRegistro(true)
  }
  return (
    <div className="ventana">
      {login ? 
      (<Login 
      setLogin={setLogin}
      />
      )
       : ''}

      {registro ? 
      (<Registro 
      setRegistro={setRegistro}
      />
      )
       : ''}


      <nav className="v-navegacion sticky">
        <a>
          Estudia<span>Confort</span>
        </a>
        <div className="about">
          <a href="#secondary">Como Funciona?</a>
          <a href="#section-3">Sobre Nosotros</a>
        </div>
        <div className="auth">
          <a style={{cursor:'pointer'}} onClick={showLogin}>Iniciar Sesion</a>
          <a style={{cursor:'pointer'}} onClick={showRegistro}>Registrate</a>
        </div>
      </nav>

      <main className="main">
        <section className="bienvenida">
          <div>
            <p className="bienvenida-text">La mejor habitacion</p>
            <p className="bienvenida-text">
              a tu <span>alcance</span>
            </p>
          </div>
          <img className="imagen-w" src={room} alt="Imagen-perrona" />
        </section>

        <section className="secondary" id="secondary">
          <img className="imagen-keys" src={keys} alt="imagen-keys" />
          <p className="b-secondary">
            Encuentra la habitacion <span>ideal</span> cerca de tu{" "}
            <span>escuela</span>
          </p>
        </section>

        <section id="section-3" className="section-3">
          <div>
          <h2>Sobre nosotros</h2>
          <p >
            Somos una empresa encargada de brindar comodidad a los clientes en
            este caso estudiantes para que puedan teneer una experiencia en la
            universidad
          </p>
          </div>
         
          <img className="img-estudiantes" src={estudiantes} alt="imagen-estudiantes" />
        </section>
      </main>
    </div>
  );
}

export default Ventana;
