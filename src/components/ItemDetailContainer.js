import { useEffect, useState } from "react";
import "./Styles/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ()=>{

  const [prodDetail, setProdDetail] = useState([]);
  const {id} = useParams();

  const getDetail = async ()=> {
    const productRef = doc(db, "products", id);
    const prodSnap = await getDoc(productRef);
    const product = prodSnap.data()
    product.id = prodSnap.id;  
    return product
  }

  useEffect(()=>{ 
  getDetail()
    .then((res)=> setProdDetail(res))
    .catch((err)=> alert(`No se pudo recuperar el detalle del producto. Error ${err}`))
  }, [id]);


    return(
        <div>
          <ItemDetail key={prodDetail.id} data={prodDetail}/>
        </div>
    )
}

export default ItemDetailContainer;