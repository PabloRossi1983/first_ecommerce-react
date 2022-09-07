import "./Styles/SerchItem.css"
import { Link } from "react-router-dom";

const SerchItem = ({dataProd, clearModal, clearBurguerMenu})=> {
   
  const {img, title, id} = dataProd;
  
  
    return(
        <Link className="link-no-decoration" to={`/Item/${id}`} onClick={()=>{clearModal();clearBurguerMenu()}}>
          <div className="serch-item-cont underline-1rem">
            <div className="serch-item-img"> 
              <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
            </div> 
            <div className="serch-item-title-cont">
              <h5 className="serch-item-title">{title}</h5>
            </div>
          </div>
        </Link>
    )
}

export default SerchItem;