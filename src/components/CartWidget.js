import './Styles/CartWidget.css'


const CartWidget = ()=> {
    return(
      <div className='cart-container d-flex align-items-center justify-content-around'>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="cart-nav-link" href="#">Acceder</a>
          </li>
          <li className="cart-nav-item">
            <a className="nav-link" href="#">Carrito <i className="fa-solid fa-cart-shopping"></i></a>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CartWidget;