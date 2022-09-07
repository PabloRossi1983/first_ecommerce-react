import ItemCount from "./ItemCount";
import "./Styles/ItemDetail.css";
import { useState } from "react";
import useNumberFormat from "./Hooks/useFormatNumber";
import { Link } from "react-router-dom"
import ImgModal from "./ImgModal"

const ItemDetail = ({data})=>{
  const {price, title, subtitle, description, img, id} = data;
  const [prodAmnt, setProdAmnt] = useState(0);
  const [showImgModal, setShowImgModal] = useState(false);
  const formatedPrice = useNumberFormat(price)

    return(
      <>
        {showImgModal?
        <ImgModal img={img} title={title} show={setShowImgModal}/>:
        <div className="item-detail-cont">
          <div onClick={()=>setShowImgModal(true)} className="with-50-pc">
            <img src={`/assets/img/${img}`} className="item-detail-img" alt={title}/>
          </div>
          <div className="item-detail with-50-pc">
              <h3 className="text-start">{title}</h3>
              <h4 className="text-start">{subtitle}</h4>
              <p className="text-start">{description}</p>
              <p className="item-detail-price text-start">${formatedPrice}</p>
              <div className="with-50-pc">
                {
                prodAmnt < 1 ?
                         <ItemCount key={id} setProdAmnt={setProdAmnt} data={data}/>:
                         <div>
                           <Link to="/"><button className="sbmt-btn">Seguir comprando</button></Link>
                           <Link to="/cart"><button className="sbmt-btn">Finalizar compra</button></Link>
                         </div>  
                } 
              </div>
          </div>
        </div>}
      </>
    )
}

export default ItemDetail;