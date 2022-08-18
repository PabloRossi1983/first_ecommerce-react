import "./Styles/CartItem.css"
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import MiniCount from "./MiniCount";

const CartItem = ({dataProd})=> {
   
  const {img, title, price, amount, id} = dataProd;
  const {clearItem} = useContext(CartContext)
  const [miniCountAmount, setMiniCountAmount] = useState(amount)

    return(
        <div className="cart-item-cont underline-1rem">
          <button className="clear-btn" onClick={()=>clearItem(id, miniCountAmount, price)} ><i className="fa-regular fa-trash-can"></i></button>
          <div className="cart-img"> 
            <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
          </div> 
          <div className="cart-prod-info">
            <h5 className="small">{title}</h5>
          </div>
          <h5 className="small prod-sub-price">$ {price}</h5>
          <MiniCount key={id} data={dataProd} setMiniCountAmount={setMiniCountAmount}/>
          <h5 className="small prod-price">$ {price*miniCountAmount}</h5>
        </div>
    )
}

export default CartItem;