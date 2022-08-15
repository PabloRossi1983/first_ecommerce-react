import "./Styles/Cart.css";
import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = ()=>{
  
  const {cartProducts, totalAmount, totalPrice} = useContext(CartContext);
    
    return(
      <div className="cont-princ">
        <div className="checkout-cont checkout-page"> 
          <div className="prod-det-cont">
            <tbody className="table-padding">
              <tr className="th-cont underline-2rem">
                <th className="producto-th">PRODUCTO</th>
                <th className="precio-th small-title">PRECIO</th>
                <th className="cantidad-th small-title">CANTIDAD</th>
                <th className="subtotal-th small-title">SUBTOTAL</th>
              </tr>
            </tbody>
              {cartProducts.map(el=> <CartItem key={el.id} dataProd={el}/>)}
            <button className="sbmt-btn"><Link to="/">Seguir comprando</Link></button>  
          </div> 
          <div className="empty-column ">
             <div className="line-div vertical-line"></div>
             <div className="line-div"></div>
          </div>
          <div className="final-cont">
            <tbody className="table-padding"> 
              <tr className="title-tr underline-2rem">
                <th>TOTAL DEL CARRITO</th>
              </tr> 
              <tr className="total-tr underline-1rem">
                <th className="total-th">CANTIDAD PRODUCTOS:</th>
                <td className="total-td">{totalAmount}</td>
              </tr>  
              <tr className="total-tr underline-1rem">
                <th className="total-th">TOTAL:</th>
                <td className="total-td">$ {totalPrice}</td>
              </tr> 
            </tbody>
            <button className="sbmt-btn"><Link to="/cart">Finalizar compra</Link></button>
          </div>  
        </div> 
      </div>  
    )
}

export default Cart;