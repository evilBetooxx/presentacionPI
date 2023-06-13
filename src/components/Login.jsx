import React, { useState } from "react";
import Bienvenido from "./Bienvenido";



function Login({ setLogin }) {
  const [bienvenido, setBienvenido] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    setBienvenido(true);  

    setTimeout(() => {
      setBienvenido(false);
      setLogin(false);
    }, 2000);
  }
  return (
    <div className="login">
      {bienvenido ? <Bienvenido /> : ""}
      <p className="atras" onClick={() => setLogin(false)}>
        Atras
      </p>
      <form onSubmit={handleSubmit} className="formulario">
        <p className="iniciar">
          Iniciar <span>sesion</span>
        </p>
        <p>Nombre de usuario</p>
        <input type="text" />
        <p>Contraseña</p>
        <input type="password" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Login;
