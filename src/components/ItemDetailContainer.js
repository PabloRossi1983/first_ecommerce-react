import { useEffect, useState } from "react";
import "./Styles/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "./Loader";

const ItemDetailContainer = ()=>{

  const [prodDetail, setProdDetail] = useState([]);
  const [loader, setLoader] = useState(true);
  const {id} = useParams();

  const getDetail = async ()=> {
    setLoader(true)
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
    .finally(()=>setLoader(false))
  }, [id]);


    return(
      <>{loader ? <Loader /> : 
        <div>
          <ItemDetail key={prodDetail.id} data={prodDetail}/>
        </div>}
      </>
    )
}

export default ItemDetailContainer;