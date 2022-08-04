import './Styles/CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
    return(
      <div className='cart-container d-flex align-items-center justify-content-around'>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="cart-nav-link" href="#">Acceder</a>
          </li>
          <li className="cart-nav-item">
            <Link to="/Cart" className="nav-link" >Carrito <i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CartWidget;