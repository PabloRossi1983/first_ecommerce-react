import "./Styles/SerchItem.css"
import { Link } from "react-router-dom";

const SerchItem = ({dataProd, clearModal})=> {
   
  const {img, title, id} = dataProd;
  
  
    return(
        <Link to={`/Item/${id}`} onClick={()=>clearModal()}>
          <div className="serch-item-cont underline-1rem">
            <div className="serch-item-img"> 
              <img className="card-img-top"  src={`/assets/img/${img}`} alt={title}/>
            </div> 
            <div className="serch-item-title">
              <h5 className="small">{title}</h5>
            </div>
          </div>
        </Link>
    )
}

export default SerchItem;