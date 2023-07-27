import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "./config/LugaresConection";
import React from "react";

const Avatares = () => {
  const [avatares, setAvatares] = useState([]);
  const mostrarAvatares = async () => {
    const avataresCollection = collection(dataBase, "avatares");
    const data = await getDocs(avataresCollection);
    setAvatares(data.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    mostrarAvatares();
  }, []);
  return (
    <section>
      <h1 className="titulo">AVATARES</h1>
      <section className="contenedorCards">
        {avatares.map((item) => (
          <section key={item.nombre} className="cardAvatares">
            <img src={item.imagen} alt="avatar" className="avatar" />
            <h1>{item.nombre}</h1>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Avatares;
