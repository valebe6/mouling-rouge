const Login = () => {
  function verificar() {
    let user = document.querySelector("#user");
    if (user == "hola") {
      console.log("holaaaa");
    }
  }

  return (
    <section>
      <form action="" className="formulario">
        <label>Usuario</label>
        <input type="text" id="user" />
        <label>Contraseña</label>
        <input type="password" />
        <button type="button" onClick={verificar}>
          Iniciar Sesion
        </button>
      </form>
    </section>
  );
};

export default Login;
