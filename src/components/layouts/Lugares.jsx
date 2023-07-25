import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "./config/LugaresConection";
import ReactPlayer from 'react-player';


const Lugares = () => {
    const [lugares,setLugares] = useState([]);
    const mostrarLugares =async () =>{
        const lugaresCollection = collection(dataBase, "lugares");
        const data = await getDocs(lugaresCollection);
        setLugares(data.docs.map((doc) =>({...doc.data()})));
    };
    useEffect(() => {
        mostrarLugares();
    }, [])
  return (
    <section>
      <section>
      {lugares.map((item) => (
          <section key={item.nombre} className="card">
            <ReactPlayer url={item.video} />
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
          </section>
        ))}
      </section>
    </section>
  )
}

export default Lugares