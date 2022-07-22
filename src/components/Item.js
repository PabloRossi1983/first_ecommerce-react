import ItemCount from "./ItemCount"
import "./Styles/Item.css"



const Item = ({data}) => {
  const {img, title, description, price, stock} = data;
    return(
      <div className="card" >
        <div className="img-cont ancho-total">
          <img className="card-img-top" src={`/assets/img/${img}`}  alt="Producto" />
        </div>
        <div className="card-body ancho-total">
          <h5 className="card-title ancho-total">{title}</h5>
          <p className="card-text ancho-total">{description}</p>
          <p>${price}</p>
          {<ItemCount price={price} stock={stock}/>}
        </div>
      </div>
    )
}

export default Item

