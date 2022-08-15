import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const addToCart = (product)=>{ 
        setCartProducts(cartProducts.findIndex(el => product.id === el.id) === -1 ?
                       [...cartProducts,product]:
                       filtCart(cartProducts, product));
        setTotalAmount(totalAmount+product.amount)
        setTotalPrice([...cartProducts,product]
          .map((el)=> el.price*el.amount)
          .reduce((a,b)=> a+b, 0))               
    }
    
    const clearCart = ()=>{
        setTotalAmount(0);
        setCartProducts([]);
        setTotalPrice(0)
    }

    const clearItem = (id, amount, price)=>{
      setCartProducts(cartProducts.filter(el=> el.id !== id));
      setTotalAmount(totalAmount-amount);
      setTotalPrice(totalPrice - amount*price)
    }

    const filtCart = (array, prod)=>{
        for (let i = 0; i < array.length; i++) {
          if(prod.id === array[i].id){
            array[i].amount += prod.amount
          };
        }
        return array
    }
  
/* console.log("productos: ",cartProducts)
console.log("amount: ",totalAmount)
console.log("price: ",totalPrice) */

    const data = {
        cartProducts,
        totalAmount,
        totalPrice,
        setCartProducts,
        addToCart,
        clearCart,
        clearItem, 
    }
    
    return(
        <CartContext.Provider value={data}>
          {children}
        </CartContext.Provider> 
    )
}

export default CartProvider;
export {CartContext};