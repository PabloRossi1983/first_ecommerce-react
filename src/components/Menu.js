import { useEffect, useState } from "react"
/* import { useParams } from "react-router-dom"; */
import "./Styles/Menu.css"
import products from "../utils/products.mock"
import MenuItem from "./MenuItem"

const Menu = () => {
  const [menuLink, setMenuLink] = useState([]);
  /* const {categoryId} = useParams();
  console.log("la categoría: "+categoryId) */

  useEffect(()=>{
    const getLink = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    });
    getLink
    .then((res)=>setMenuLink(res))
    .catch((err)=>alert(err))
  }, [])
  
  const categories = []
     menuLink.map((el)=> !categories.includes(el.category)? categories.push(el.category):false)
    return(
        <>
          {categories.map((el)=> <MenuItem key={el.id} data={el} />)}  
        </>
    )
}

export default Menu