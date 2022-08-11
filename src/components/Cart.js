import "./Styles/Cart.css";
import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = ()=>{
  
  const {cartProducts, totalAmount, totalPrice} = useContext(CartContext);
    
    return(
        <div className="checkout-cont checkout-page">    
          {cartProducts.map(el=> <CartItem key={el.id} dataProd={el}/>)}
          <p>TOTAL DE PRODUCTOS: {totalAmount}</p>
          <p>COSTO TOTAL: {totalPrice}</p>
        </div>
    )
}

export default Cart;