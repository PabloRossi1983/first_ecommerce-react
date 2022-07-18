import "./Styles/Item.css"

const Item = ({img, title, description, price}) => {
    return(
      <div className="card" >
        <div className="img-cont">
          <img className="card-img-top" src={`/assets/img/${img}`}  alt="Producto" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>${price}</p>
          <a href="#" className="btn btn-outline-primary">Añadir al carrito</a>
        </div>
      </div>
    )
}

export default Item

