import { useEffect, useState } from "react";
import "./Styles/ItemDetailContainer.css";
import products from "../utils/products.mock"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

  const [prodDetail, setProdDetail] = useState([]);
  const {id} = useParams();

  useEffect(()=>{ 
    const getDetail = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(products, 2000)
      })  
    });
    
  getDetail
    .then((res)=>filterId(res))
    .catch((err)=> alert(`No se pudo recuperar el detalle del producto. Error ${err}`))
  
    
  }, []);
  
  const filterId = ()=>{
    products.map((el)=> el.id == id? setProdDetail(el): false)
  }

  
    return(
        <div>
          <ItemDetail key={prodDetail.id} data={prodDetail}/>
        </div>
    )
}

export default ItemDetailContainer;