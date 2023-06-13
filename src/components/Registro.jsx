import React, { useState } from "react";
import Bienvenido from "./Bienvenido";



function Registro({ setRegistro }) {
const [bienvenido, setBienvenido] = useState(false);

function handleSubmit(e) {
    e.preventDefault();

    setBienvenido(true);  

    setTimeout(() => {
      setBienvenido(false);
      setRegistro(false);
    }, 2000);
  }
  
  return (
    <div className="registro">
      {bienvenido ? <Bienvenido /> : ""}
      <p className="atras" onClick={() => setRegistro(false)}>
        Atras
      </p>
      <form onSubmit={handleSubmit} className="formulario">
        <p className="registrarse">
          Registrate
        </p>
        <p>Nombre Completo:</p>
        <input type="text" />
        <p>Adjunte una imagen de ambos lados de su INE: <br /></p>
        <input className="file" type="file"/>
        <p>Número Personal:</p>
        <input type="text" />
        <p>Número de Padres o Tutor:</p>
        <input type="text" />
        <p>Ingrese el nombre de su escuela:</p>
        <input type="text" />
        <p>Adjunte evidencia de su estado estudiantil:</p>
        <input className="file" type="file"/>
        <p>Contraseña:</p>
        <input type="password" />
        <p>Confirmar Contraseña:</p>
        <input type="password" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Registro;