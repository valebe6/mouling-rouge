import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
const Login = () => {
  return (
    <section>
      <form action="" className="formulario">
        <img src={logo} alt="logo" />
        <label>Usuario</label>
        <input type="text" />
        <label>Contraseña</label>
        <input type="password" />
        <Link to={'/home'} type="btnLogin">Iniciar Sesion</Link>
      </form>
    </section>
  );
};

export default Login;
