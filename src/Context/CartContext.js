import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
    const addToCart = (product)=>{
        setTotalAmount(totalAmount+product.amount) 
        setCartProducts(cartProducts.findIndex(el => product.id === el.id) === -1 ?
                       [...cartProducts,product]:
                       filtCart(cartProducts, product))
    }
    
    const clearCart = ()=>{
        setTotalAmount(0)
        setCartProducts([])
    }

    const clearItem = (id, amount)=>{
      setCartProducts(cartProducts.filter(el=> el.id !== id))
      setTotalAmount(totalAmount-amount)
      
    }

    const filtCart = (array, prod)=>{
        for (let i = 0; i < array.length; i++) {
          if(prod.id === array[i].id){
            array[i].amount += prod.amount
          };
        }
        return array
    }

    const data = {
        cartProducts,
        totalAmount,
        setCartProducts,
        addToCart,
        clearCart,
        clearItem 
    }
    
    return(
        <CartContext.Provider value={data}>
          {children}
        </CartContext.Provider> 
    )
}

export default CartProvider;
export {CartContext};