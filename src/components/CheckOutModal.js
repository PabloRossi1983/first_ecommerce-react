import { useState } from "react"
import "./Styles/CheckOutModal.css"
import PurchaseDetail from "./PurchaseDetail"
import db from "../utils/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore"
import Confirmation from "./Confirmation"

const CheckOutModal = ({total, items, setShowModal})=> { 

    const [purchaseId, setPurchaseId] = useState("")

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
      address: "",
      city: "",
      cp: "",
    })

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name] : e.target.value}) 
  }   

  const handleOrder = (e)=> {
    e.preventDefault(); 
    submitData({...order, buyer: formData})   
  }

  const submitData = async (newOrder)=> {
    const generatedId = await addDoc(collection(db, "Order"), newOrder)
    setPurchaseId(generatedId.id)
  }

 console.log(order)
    return(
        <div className="checkout-modal-cont">
          <div className="form-cont">
            <div className="x-close-cont">
              <div onClick={()=>setShowModal(false)} className="x-close">X</div>
            </div>
            {purchaseId ? 
            <Confirmation purchaseId={purchaseId} data={formData}/>:
            <form onSubmit={handleOrder} className="form">
              <div className="inputs-cont">
                <h4 className="form-title underline-2rem">DATOS PARA LA COMPRA</h4>
                <input className="input1" type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required/>
                <input className="input2" type="text" name="lastname" placeholder="Apellido" value={formData.lastname} onChange={handleChange} required/>
                <input className="input3" type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required/>
                <input className="input4" type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required/>
                <input className="input5" type="text" name="cp" placeholder="Código postal" value={formData.cp} onChange={handleChange} required/>
                <input className="input6" type="text" name="phone" pattern="[0-9]{7,10}" title="Debe ingresar entre 7 y 10 dígitos" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required/>
                <input className="input7" type="email" name="email" placeholder="e-mail" value={formData.email} onChange={handleChange} required/>
              </div> 
              <div className="checkout-detail-cont">
                <div>
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
                      <h6>{total}</h6>
                    </div>
                  </div>
                </div>  
                <button className="sbmt-btn" type="submit">FINALIZAR COMPRA</button>
              </div>
            </form>}     
          </div>
        </div>
    )
}

export default CheckOutModal