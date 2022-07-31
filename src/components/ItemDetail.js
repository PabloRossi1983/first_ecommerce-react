import ItemCount from "./ItemCount";
import "./Styles/ItemDetail.css";


const ItemDetail = ({data})=>{
 const {price, title, subtitle, description, img, stock, id} = data;
    return(
      <div className="item-detail-cont">
        <div className="with-50-pc">
          <img src={`/assets/img/${img}`} className="item-detail-img" />
        </div>
        <div className="item-detail with-50-pc">
            <h3 className="text-start">{title}</h3>
            <h4 className="text-start">{subtitle}</h4>
            <p className="text-start">{description}</p>
            <p className="item-detail-price text-start">${price}</p>
            <div className="with-50-pc">
              <ItemCount key={id} priceData={price} stockData={stock}/>
            </div>
        </div>
      </div>
    )
}

export default ItemDetail;