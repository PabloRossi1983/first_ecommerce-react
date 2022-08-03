import "./Styles/CartItem.css"

const CartItem = ()=> {
    return(
        <div className="cart-item-cont">
          <div className="cart-img"> 
            <img className="card-img-top"  src='/assets/img/products-img/aceite-lavanda.jpg' alt="foto prueba"/>
          </div> 
          <div className="cart-prod-info">
            <h5>TITULO</h5>
            <h6>SUBTITULO</h6>
          </div>
          <div className="cart-prod-price">
            <p >X 2.</p>
            <h5>$ 5600</h5>
          </div>
        </div>
    )
}

export default CartItem;