import { useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
import '../App.css'

const ItemCount = ({ stock }) => {
  const [numero, setNumero] = useState(0);


  const incrementar = () => {
    if (numero === stock) return;
    setNumero(numero + 1);
  };


  const decrementar = () => {
    if (numero === 0) return;
    setNumero(numero - 1);
  };


  return (
    <div>
      <div className="divIcono">
        <button className="icono">{numero}</button>
      </div>
      <button onClick={incrementar} className="icono"> <BsFillBagPlusFill></BsFillBagPlusFill> </button>
      <button onClick={decrementar} className="icono"> <BsFillBagXFill></BsFillBagXFill> </button>
    </div>
  );
};


export default ItemCount;