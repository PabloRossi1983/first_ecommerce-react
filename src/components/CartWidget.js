import './Styles/CartWidget.css'


const CartWidget = ()=> {
    return(
      <div className='cart-container d-flex align-items-center justify-content-around'>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#">Acceder</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Carrito <i class="fa-solid fa-cart-shopping"></i></a>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CartWidget;