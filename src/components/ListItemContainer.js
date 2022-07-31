import { useState, useEffect } from "react";
import ItemList from "./ItemList"
import "./Styles/ListItemContainer.css"
import products from "../utils/products.mock";


const ListItemContainer = ({greeting}) => {

  const [prodList, setProdList] = useState([]);
  

  useEffect(()=>{
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 5/* 2000 */);
    });

    getProducts
      .then((res)=> setProdList(res))
      .catch((error)=> alert(`No se ha podido completar la comunicación con el servidor. Error  ${error}`))
    }, [])
    
    return(
      <div className="section">
          <h2 className="title">{greeting}</h2>
          <ItemList dataProd={prodList}/>
      </div>
    )  
}

export default ListItemContainer