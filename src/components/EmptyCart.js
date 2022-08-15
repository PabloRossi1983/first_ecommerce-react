import "./Styles/EmptyCart.css";
import { Link } from "react-router-dom"

const EmptyCart = ()=>{
    return(
        <div className="display-flex">
          <div className="empty-cart-cont">
              <h2 className="underline-2rem">Ooops! El carrito está vacío.</h2>
              <button className="sbmt-btn"><Link to="/">Seguir comprando</Link></button>
          </div>
        </div>
    )
}

export default EmptyCart;