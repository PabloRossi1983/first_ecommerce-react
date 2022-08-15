import "./Styles/CartItem.css"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartItem = ({dataProd})=> {
   
  const {img, title, price, amount, id} = dataProd;
  const {clearItem} = useContext(CartContext)

    return(
        <div className="cart-item-cont underline-1rem">
          <button className="clear-btn" onClick={()=>clearItem(id, amount, price)} ><i class="fa-regular fa-trash-can"></i></button>
          <div className="cart-img"> 
            <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
          </div> 
          <div className="cart-prod-info">
            <h5 className="small">{title}</h5>
          </div>
          <h5 className="small prod-sub-price">$ {price}</h5>
          <p className="small prod-amount">{amount}</p>
          <h5 className="small prod-price">$ {price*amount}</h5>
        </div>
    )
}

export default CartItem;