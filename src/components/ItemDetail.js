import ItemCount from "./ItemCount";
import "./Styles/ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom"


const ItemDetail = ({data})=>{
 const {price, title, subtitle, description, img, stock, id} = data;
 const [prodAmnt, setProdAmnt] = useState(0);
 console.log(prodAmnt)
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
              {
              prodAmnt < 1 ?
                       <ItemCount key={id} priceData={price} stockData={stock} setProdAmnt={setProdAmnt} />:
                       <button className="sbmt-btn"><Link to="/cart">Finalizar compra</Link></button>
              } 
            </div>
        </div>
      </div>
    )
}

export default ItemDetail;