import Header from "../helpers/Header";
import Carrusel from "./Carrusel";
import Juego from "./Juego";
import Nombre from "./Nombre";
import Quienes from "./Quienes";
import Targeta from "./Targeta";




const Home = () => {
  return (
    <section>
      <section className="encabezado">
        
        <Header/>
        <Nombre/>
        <section>
        <Juego/>
        </section>

        <section>

          <Targeta/>

        </section>

      </section>

      <Carrusel/>

      <Quienes/>

    </section>


  )
};

export default Home;
