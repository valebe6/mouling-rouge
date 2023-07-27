import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const Login = () => {
  return (
    <section className="containerLogin">
      <form action="" className="formularioLogin">
        <img src={logo} alt="logo" className="imgLogin" />
        <label>Usuario</label>
        <input type="text" className="input" />
        <label>Contraseña</label>
        <input type="password" className="input" />
        <Link to={"/home"} className="btnLogin">
          Iniciar Sesion
        </Link>
      </form>
    </section>
  );
};

export default Login;
