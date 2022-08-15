import Cart from "../Cart"
import EmptyCart from "../EmptyCart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CheckOut = ()=>{
  const {totalAmount} = useContext(CartContext)

    return(
      <>
        {totalAmount > 0? <Cart />:
                          <EmptyCart />}
      </>
    )
}

export default CheckOut;