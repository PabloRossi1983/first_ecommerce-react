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
        resolve(products.filter((el)=> el.id == id))}, 5)  
    });
    
  getDetail
    .then((res)=> setProdDetail(res))
    .catch((err)=> alert(`No se pudo recuperar el detalle del producto. Error ${err}`))
  
    
  }, [id]);

    return(
        <div>
          {prodDetail.map((el)=> <ItemDetail key={el.id} data={el}/>)}
        </div>
    )
}

export default ItemDetailContainer;