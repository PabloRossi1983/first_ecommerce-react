import "./Styles/Cart.css";
import CartItem from "./CartItem"
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import CheckOutModal from "./CheckOutModal"

const Cart = ()=>{
  
  const [showModal, setShowModal] = useState(false)
  const {cartProducts, totalAmount, totalPrice} = useContext(CartContext);

    
    return(
      <div className="cart-cont-princ">
        <div className="checkout-cont"> 
          <div className="prod-det-cont">
            <div className="table-padding">
              <div className="th-cont underline-2rem">
                <h6 className="producto-th">PRODUCTO</h6>
                <h6 className="precio-th small-title">PRECIO</h6>
                <h6 className="cantidad-th small-title">CANTIDAD</h6>
                <h6 className="subtotal-th small-title">SUBTOTAL</h6>
              </div>
            </div>
              {cartProducts.map(el=> <CartItem key={el.id} dataProd={el}/>)}
            <button className="sbmt-btn"><Link to="/">Seguir comprando</Link></button>  
          </div> 
          <div className="empty-column ">
             <div className="line-div vertical-line"></div>
             <div className="line-div"></div>
          </div>
          <div className="final-cont">
            <div className="table-padding"> 
              <div className="title-tr underline-2rem">
                <h6>TOTAL DEL CARRITO</h6>
              </div> 
              <div className="total-tr underline-1rem">
                <h6 className="total-th">CANTIDAD PRODUCTOS:</h6>
                <h6 className="total-td">{totalAmount}</h6>
              </div>  
              <div className="total-tr underline-1rem">
                <h6 className="total-th">TOTAL:</h6>
                <h6 className="total-td">$ {totalPrice}</h6>
              </div> 
            </div>
            <button onClick={()=>setShowModal(true)} className="sbmt-btn">Finalizar compra</button>
          </div>  
        </div> 
        {showModal && <CheckOutModal total={totalPrice} items={cartProducts} setShowModal={setShowModal}/>}
      </div>  
    )
}

export default Cart;