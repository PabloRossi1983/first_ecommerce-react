import "./Styles/Item.css"
import { Link } from "react-router-dom";


const Item = ({data}) => {
  const {img, title,subtitle, description, price, stock, id} = data;
    return(
      <div className="card" >
        <Link to={`/Item/${id}`}>
          <div className="img-cont ancho-total">
            <img className="card-img-top" src={`/assets/img/${img}`}  alt="Producto" />
          </div>
          <div className="card-body ancho-total">
            <h5 className="card-title ancho-total">{title}</h5>
            <h6 className="card-text ancho-total">{subtitle}</h6>
            {/* <p>${price}</p> */}
            {/* {<ItemCount price={price} stock={stock}/>} */}
          </div>
          </Link>  
      </div>
    )
}

export default Item

