import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import "./Styles/ListItemContainer.css"
import products from "../utils/products.mock";


const ListItemContainer = ({greeting}) => {

  const [prodList, setProdList] = useState([]);
  const {categoryId} = useParams();
  const title = ()=> categoryId !== undefined ? categoryId : greeting;

  useEffect(()=>{
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 5/* 2000 */);
    });

    getProducts
      .then((res)=> setProdList(res))
      .catch((error)=> alert(`No se ha podido completar la comunicación con el servidor. Error  ${error}`))
    }, [categoryId]);

    return(
      <div className="section">
          <h2 className="title">{title()}</h2>
          <ItemList dataProd={prodList} cat={categoryId}/>
      </div>
    )  
}

export default ListItemContainer