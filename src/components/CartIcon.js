import './Styles/CartIcon.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartIcon  = ({showCart})=> {
  
  const {totalAmount} = useContext(CartContext)

    return(
      <div className='cart-icon-container d-flex align-items-center justify-content-around'>
        <ul className="nav justify-content-center">
          {/* <li className="nav-item">
            <a className="cart-nav-link" href="#">Acceder</a>
          </li> */}
          <li className="cart-nav-item">
            <div className='quant-icon'>
              {totalAmount > 0 && <p>{totalAmount}</p>}
              <i onClick={()=>showCart(true)} className="fa-solid fa-cart-shopping"></i>
            </div>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CartIcon;