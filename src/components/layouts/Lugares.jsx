import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "./config/LugaresConection";
import ReactPlayer from "react-player";

import React from "react";
const Lugares = () => {
  const [lugares, setLugares] = useState([]);
  const mostrarLugares = async () => {
    const lugaresCollection = collection(dataBase, "lugares");
    const data = await getDocs(lugaresCollection);
    setLugares(data.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    mostrarLugares();
  }, []);
  return (
    <section>
      <h1 className="titulo">LUGARES</h1>
      <section className="contenedorCards">
        {lugares.map((item) => (
          <section key={item.nombre} className="cardLugares">
            <ReactPlayer url={item.video} className="videoLugares" />
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Lugares;
