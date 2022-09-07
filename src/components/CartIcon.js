import './Styles/CartIcon.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartIcon  = ({showCart})=> {
  
  const {totalAmount} = useContext(CartContext)

    return(
      <div className='cart-icon-container align-items-center justify-content-around'>
        <ul className="nav justify-content-center">
          <li className="cart-nav-item">
            <div  onClick={()=>showCart(true)}  className='cart-icon'>
              {totalAmount > 0 && <p className='cart-icon-quant'>{totalAmount}</p>}
              <i className="fa-solid fa-cart-shopping"></i>
              <p className='carrito-text'>CARRITO</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CartIcon;