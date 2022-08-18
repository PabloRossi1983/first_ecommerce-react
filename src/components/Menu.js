import { useEffect, useState } from "react"
import "./Styles/Menu.css"
import MenuItem from "./MenuItem"
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Menu = () => {
  const [menuLink, setMenuLink] = useState([]);

  const getLink = async ()=> {
    const productCollection = collection(db, 'products');
    const productSnapShot = await getDocs(productCollection)
    const productList = productSnapShot.docs.map((doc)=> {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    return productList
  }

  useEffect(()=>{
    
    getLink()
    .then((res)=>setMenuLink(res))
    .catch((err)=>alert(err))
  }, [])
  
  const categories = []
     menuLink.map((el)=> !categories.includes(el.category)? categories.push(el.category):false)
    return(
        <>
          {categories.map((el)=> <MenuItem key={el} data={el}/>)}  
        </>
    )
}

export default Menu