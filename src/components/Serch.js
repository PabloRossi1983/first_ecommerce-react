import SerchModal from "./SerchModal";
import "./Styles/Serch.css"
import { useState, useEffect } from "react";
import db from "../utils/firebaseConfig";
import { collection, getDocs} from "firebase/firestore";


const Serch = ({setShowBurguer})=> {
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]); 
  const [showSerch, setShowSerch] = useState(false);

  const getProducts = async ()=> {
    const productSerch = collection(db, 'products');
    const productSnapShot = await getDocs(productSerch)
    const productList = productSnapShot.docs.map((doc)=> {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    return productList
  }

  useEffect(()=>{
    getProducts()
      .then((res)=> setProducts(res))
      .catch((error)=> alert(`No se ha podido completar la comunicación con el servidor. Error  ${error}`)) 
    }, []);


  const handleChange = (e)=>{
    if(e.target.value === ""){
      setShowSerch(false)}
    else{
      let arr = products.filter((el)=> el.title.toLowerCase().normalize('NFD').includes(e.target.value.toLowerCase().normalize('NFD')))
      if(arr.length > 0){
        setFoundProducts(arr)
        setShowSerch(true)}
      else{
        setShowSerch(false)
      }
    }
  }

  const clearSerch = (e)=> {
    setTimeout(() => {
      e.target.value = "";
      handleChange(e)
    }, 500);
  }

  const clearBurguerMenu = ()=>{
    setShowBurguer(false)
  }
  
  return(
      <div className="container-serch navbar">
        <input className="form-control input-sz"
               type="search" 
               placeholder="Buscar producto" 
               aria-label="Search"
               onChange={handleChange}
               onBlur={clearSerch}/>
        {showSerch && <SerchModal data={foundProducts} clearModal={clearSerch} clearBurguerMenu={clearBurguerMenu}/>}
      </div>
   
  )
}

export default Serch;