import { useEffect, useState } from "react";
import "./Styles/ItemDetailContainer.css";
import products from "../utils/products.mock"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=>{
  const [prodDetail, setProdDetail] = useState([]);

  useEffect(()=>{ 
    const getDetail = new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(products, 2000)
      });
    });
    
  getDetail
    .then((res)=>setProdDetail(res))
    .catch((err)=> alert(`No se pudo recuperar el detalle del producto. Error ${err}`))
  }, []);
  console.log(prodDetail)
    return(
        <div>
          <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer;