import { useContext, useState } from "react"
import useNumberFormat from "./Hooks/useFormatNumber"
import "./Styles/CheckOutModal.css"
import PurchaseDetail from "./PurchaseDetail"
import db from "../utils/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore"
import Confirmation from "./Confirmation"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

const CheckOutModal = ({total, items, setShowModal})=> { 

  const [purchaseId, setPurchaseId] = useState("")
  const {clearCart} = useContext(CartContext)
  const date = new Date().toLocaleDateString()
  const order = {
    buyer: {},
    items: items,
    date: date,
    total: total
  }
  const [formData, setFormData] = useState({
    name:"", 
    lastname: "",
    phone:"",
    email:"",
    email2: "",
    address: "",
    city: "",
    cp: "",
  })

  const formatedTotal = useNumberFormat(total)
  
  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name] : e.target.value}) 
  }   

  const handleOrder = (e)=> { 
    submitData({...order, buyer: formData})   
  }

  const submitData = async (newOrder)=> {
    const generatedId = await addDoc(collection(db, "Order"), newOrder)
    setPurchaseId(generatedId.id)
  }

  const validateEmail = (e)=>{
    e.preventDefault();
    let email1 = document.getElementById('email1');
    let email2 = document.getElementById('email2');

    if(email1.value !== email2.value){
      (document.getElementById("match-error").classList.remove("hide-match-error"));
      return false
    }
    else{
      document.getElementById("match-error").classList.add("hide-match-error");
      handleOrder()
    }
  }


    return(
        <div className="checkout-modal-cont">
          <div className="form-cont">
            <div className="x-close-cont">
              {purchaseId ?
              <Link to="/"><div onClick={()=>{setShowModal(false);clearCart()}} className="x-close">X</div></Link>:
              <div className="x-close" onClick={()=>setShowModal(false)}>X</div>}
            </div>
            {purchaseId ? 
            <Confirmation purchaseId={purchaseId} data={formData}/>:
            <form onSubmit={validateEmail} className="form">
              <div className="inputs-cont">
                <h4 className="form-title underline-2rem">DATOS PARA LA COMPRA</h4>
                <input className="input1" type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required/>
                <input className="input2" type="text" name="lastname" placeholder="Apellido" value={formData.lastname} onChange={handleChange} required/>
                <input className="input3" type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required/>
                <input className="input4" type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required/>
                <input className="input5" type="text" name="cp" placeholder="Código postal" value={formData.cp} onChange={handleChange} required/>
                <input className="input6" type="text" name="phone" pattern="[0-9]{7,10}" title="Debe ingresar entre 7 y 10 dígitos" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required/>
                <input id="email1" className="input7" type="email" name="email" placeholder="e-mail" value={formData.email} onChange={handleChange} required/>
                <input id="email2" className="input8" type="email" name="email2" placeholder="repite el e-mail" value={formData.email2} onChange={handleChange} autocomplete="************" required/>
                <p id="match-error" className="email-match-error hide-match-error">Los correos no coinciden! Vuelve a intentarlo.</p>
              </div> 
              <div className="checkout-detail-cont">
                <div className="checkout-detail-cont2">
                  <div className="purchase-detail-item-cont">
                    <h4 className="underline-2rem">TU COMRPA</h4>
                    <div></div>
                  </div>
                  <div className="purchase-detail-cont">
                    <div className="purchase-detail-item-cont underline-2rem">
                      <h6>PRODUCTO</h6>
                      <h6>SUBTOTAL</h6>
                    </div>
                    {items.map(el=> <PurchaseDetail key={el.id} data={el}/>)}
                    <div className="purchase-detail-item-cont underline-2rem">
                      <h6>TOTAL</h6>
                      <h6>{formatedTotal}</h6>
                    </div>
                  </div>
                </div>  
                <button id="sbmt-btn" className="sbmt-btn" type="submit">FINALIZAR COMPRA</button>
              </div>
            </form>}     
          </div>
        </div>
    )
}

export default CheckOutModal