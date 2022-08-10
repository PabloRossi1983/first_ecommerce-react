import { useContext } from "react"
import "./Styles/CartWidget.css"
import CartItem from "./CartItem"
import { CartContext } from "../Context/CartContext"


const CartWidget = ({hideCart})=>{
  const {cartProducts, clearCart} = useContext(CartContext);
  

  
    return(

        <div className="cart-cont-position">
            <div id="exampleModal" tabIndex="+1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="flase">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">CARRITO</h5>
                  </div>
                  <div className="modal-body">
                    {cartProducts.map(el=> <CartItem key={el.id} dataProd={el}/>)}
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>hideCart(false)}>CERRAR</button>
                    <button type="button" className="btn btn-primary">FINALIZAR COMPRA</button>
                    <button type="button" className="btn btn-danger" onClick={clearCart}>LIMPIAR CARRITO</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CartWidget;