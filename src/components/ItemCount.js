import { useState } from "react";
import "./Styles/ItemCount.css";

const ItemCount = ({price, stock}) => {
  const [counter, setCounter] = useState(1)
  const [disponibles, setDisponibles] = useState(stock)
  const [total, setTotal] = useState(price)
 
  const onQuit = ()=>{
      setCounter(counter - 1);
      setDisponibles(disponibles + 1);
      setTotal((counter - 1) * price);
  } 

  const onAdd = ()=> {
      setCounter(counter + 1);
      setDisponibles(disponibles - 1);
      setTotal((counter + 1) * price); 
  }
  
    return(
    <div className="general-cont" role="group" aria-label="Basic example">
      
      <div className="counter-cont">
         <button type="button" className="minus-btn min-plusbtn" disabled={counter === 1} onClick={onQuit}>-</button>
         <p className="display-count">{counter}</p>
         <button type="button" className="plus-btn min-plusbtn" disabled={counter === stock} onClick={onAdd}>+</button>
      </div>

      <button className="sbmt-btn">Añadir al carrito<br /><small>Disponibles: {disponibles}</small></button>
      <p className="total-amount">Valor total: ${total}</p>
    </div>
    )  
}

export default ItemCount;