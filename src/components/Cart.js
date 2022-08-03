import "./Styles/Cart.css"
import CartItem from "./CartItem"
import ItemDetailContainer from "./ItemDetailContainer"

const Cart = ()=>{
    return(

        <div className="cart-cont-position">
            <div id="exampleModal" tabIndex="+1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="flase">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">CARRITO</h5>
                  </div>
                  <div className="modal-body">
                    <CartItem />
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                    <button type="button" className="btn btn-primary">FINALIZAR COMPRA</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Cart