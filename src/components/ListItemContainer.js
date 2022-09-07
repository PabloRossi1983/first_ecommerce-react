import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Loader from "./Loader";
import "./Styles/ListItemContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const ListItemContainer = ({greeting}) => {

  const [prodList, setProdList] = useState([]);
  const [loader, setLoader] = useState(true);
  const {categoryId} = useParams();
  const title = ()=> categoryId !== undefined ? categoryId : greeting;

const getProducts = async ()=> {
  setLoader(true)
  const productCollection = categoryId !== undefined ? 
                            query(collection(db, 'products'), where("category", "==", categoryId)):
                            collection(db, 'products');
  const productSnapShot = await getDocs(productCollection)
  const productList = productSnapShot.docs.map((doc)=> {
    let product = doc.data()
    product.id = doc.id
    return product
  })
  return productList
}
 
                

  useEffect(()=>{
    getProducts()
      .then((res)=> setProdList(res))
      .catch((error)=> alert(`No se ha podido completar la comunicación con el servidor. Error  ${error}`))
      .finally(()=>setLoader(false)) 
    }, [categoryId]);
    
    return(
      <>
      {loader ? <Loader /> : 
      <div className="section">
          <h2 className="title">{title()}</h2>
          <ItemList dataProd={prodList} />
      </div>}
      </>
    )  
}

export default ListItemContainer