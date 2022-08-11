import { useContext } from "react"
import "./Styles/CartWidget.css"
import CartWidgetItem from "./CartWidgetItem"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = ({hideCart})=>{

  const {cartProducts, clearCart, totalAmount} = useContext(CartContext);

    return(
        <div className="cart-cont-position">
            <div id="exampleModal" tabIndex="+1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">CARRITO</h5>
                  </div>
                  <div className="modal-body">
                    {totalAmount < 1 ?
                     <p>EL CARRITO ESTÁ VACÍO</p>:
                      cartProducts.map(el=> <CartWidgetItem key={el.id} dataProd={el}/>)}
                  </div>
                  {totalAmount < 1?
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>hideCart(false)}>CERRAR</button>
                    <Link to="/"><button type="button" className="btn btn-primary" onClick={()=>hideCart(false)}>VOLVER AL INICIO</button></Link>
                  </div>:
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>hideCart(false)}>CERRAR</button>
                    <Link to="/Cart"><button type="button" className="btn btn-primary" onClick={()=>hideCart(false)}>FINALIZAR COMPRA</button></Link>
                    <button type="button" className="btn btn-danger" onClick={clearCart}>LIMPIAR CARRITO</button>
                  </div>}
                </div>
              </div>
            </div>
        </div>
    )
}

export default CartWidget;