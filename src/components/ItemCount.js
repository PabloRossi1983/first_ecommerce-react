import { useState, useContext } from "react";
import useNumberFormat from "./Hooks/useFormatNumber";
import "./Styles/ItemCount.css";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({setProdAmnt, data}) => {
  const {price, stock} = data
  const [counter, setCounter] = useState(1)
  const [disponibles, setDisponibles] = useState(stock-1)
  const [total, setTotal] = useState(price)
  const {addToCart} = useContext(CartContext)
  
  const minusBtn = ()=>{
      setCounter(counter - 1);
      setDisponibles(disponibles + 1);
      setTotal((counter - 1) * price);
  } 

  const plusBtn = ()=> {
      setCounter(counter + 1);
      setDisponibles(disponibles - 1);
      setTotal((counter + 1) * price); 
  }

  const onAdd = ()=>{
    setProdAmnt(counter);
    addToCart({...data, amount: counter})
    
  }

    return(
    <div className="general-cont" role="group" aria-label="Basic example">
      
      <div className="counter-cont">
         <button type="button" className="minus-btn min-plusbtn" disabled={counter === 1} onClick={minusBtn}>-</button>
         <p className="display-count">{counter}</p>
         <button type="button" className="plus-btn min-plusbtn" disabled={counter === stock} onClick={plusBtn}>+</button>
      </div>

      <button className="sbmt-btn" onClick={onAdd}>Añadir al carrito<br /><small>Disponibles: {disponibles}</small></button>
      <p className="total-amount">Valor total: ${useNumberFormat(total)}</p>
    </div>
    )  
}

export default ItemCount;