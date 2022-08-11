import "./Styles/CartItem.css"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartItem = ({dataProd})=> {
   
  const {img, title, price, amount, id} = dataProd;
  const {clearItem} = useContext(CartContext)

    return(
        <div className="cart-item-cont">
          <div className="cart-img"> 
            <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
          </div> 
          <div className="cart-prod-info">
            <h5 className="small">{title}</h5>
          </div>
          <p className="small prod-amount">X {amount}</p>
          <h5 className="small prod-price">$ {price*amount}</h5>
          <button className="clear-btn" onClick={()=>clearItem(id, amount, price)} >X</button>
        </div>
    )
}

export default CartItem;