import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import "./Styles/ListItemContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { CartContext } from "../Context/CartContext";


const ListItemContainer = ({greeting}) => {

  const [prodList, setProdList] = useState([]);
  const {categoryId} = useParams();
  const {getMenuCAt} = useContext(CartContext)
  const title = ()=> categoryId !== undefined ? categoryId : greeting;

const getProducts = async ()=> {
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
    }, [categoryId]);
    
    return(
      <div className="section">
          <h2 className="title">{title()}</h2>
          <ItemList dataProd={prodList} />
      </div>
    )  
}

export default ListItemContainer