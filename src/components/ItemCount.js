import { useState } from "react";
import "./Styles/ItemCount.css";


const ItemCount = ({price, stock}) => {
  const [counter, setCounter] = useState(0)
  const [disponibles, setDisponibles] = useState(stock)
  const [total, setTotal] = useState(0)
 
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
    <div className="btn-group counter" role="group" aria-label="Basic example">

      <button type="button" className="btn btn-primary minus-btn" disabled={counter === 0} onClick={onQuit}>-</button>
      <p className="btn btn-secondary display">{counter}</p>
      <button type="button" className="btn btn-primary plus-btn" disabled={counter === stock} onClick={onAdd}>+</button>

      <button className="btn btn-outline-primary sbmt-btn">Añadir al carrito<br />Disponibles: {disponibles}</button>
      <p className="sbmt-btn">Valor total: ${total}</p>
    </div>
    )
    
}

export default ItemCount;