import "./Styles/CartWidgetItem.css"
import { useContext } from "react";
import useNumberFormat from "./Hooks/useFormatNumber";
import { CartContext } from "../Context/CartContext";

const CartWidgetItem = ({dataProd})=> {
   
  const {img, title, price, amount, id} = dataProd;
  const {clearItem} = useContext(CartContext)
  
  
    return(
        <div className="cart-item-cont underline-1rem">
          <button className="cart-widg-clear-btn" onClick={()=>clearItem(id, amount, price)} ><i className="fa-regular fa-trash-can"></i></button>
          <div className="cart-widget-img"> 
            <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
          </div> 
          <div className="cart-widget-prod-info">
            <h5 className="small">{title}</h5>
          </div>
          <h5 className="small prod-widget-sub-price">$ {useNumberFormat(price)}</h5>
          <p className="small prod-widget-amount">{amount}</p>
          <h5 className="small prod-widget-price">$ {useNumberFormat(price*amount)}</h5>
        </div>
    )
}

export default CartWidgetItem;