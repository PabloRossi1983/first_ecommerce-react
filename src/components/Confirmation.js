import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./Styles/Confirmation.css"

const Confirmation = ({purchaseId, data}) => {
    const {name} = data;
    const {clearCart} = useContext(CartContext)

    return (
        <div className="flex-cont">
          <div className="confirmation-cont">
            <h6>Felicitaciones {name}!</h6>
            <h5 className="underline-2rem">LA ORDEN SE GENERÓ CORRECTAMENTE.</h5>
            <h6>Codigo de la compra: {purchaseId}</h6>
            <Link to="/"><button onClick={()=>clearCart()} className="sbmt-btn">Volver al Inicio</button></Link>
          </div>
        </div>
    )
}

export default Confirmation