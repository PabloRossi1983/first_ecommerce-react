import { useState, useContext } from "react";
import "./Styles/MiniCount.css";
import { CartContext } from "../Context/CartContext";

const MiniCount = ({data, setMiniCountAmount}) => {
  const {price, stock, amount, id} = data
  const [counter, setCounter] = useState(amount)
  const {renewAmount} = useContext(CartContext)
  
  const minusBtn = ()=>{
      setCounter(counter - 1);
      setMiniCountAmount(counter - 1);
      renewAmount(id, counter - amount - 1, price)
  } 

  const plusBtn = ()=> {
      setCounter(counter + 1);
      setMiniCountAmount(counter + 1);
      renewAmount(id, counter - amount + 1, price) 
  }

    return(
    <div className="mini-count-cont">
        <button type="button" disabled={counter === stock} onClick={plusBtn}><i className="fa-solid fa-caret-up"></i></button>
        <p className="display-count">{counter}</p>
        <button type="button" disabled={counter === 1} onClick={minusBtn}><i className="fa-solid fa-caret-down"></i></button>
    </div>
    )  
}

export default MiniCount;