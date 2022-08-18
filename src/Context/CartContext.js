import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [menuCat, setMenuCat] = useState([])
  
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
      setTotalAmount(totalAmount - amount);
      setTotalPrice(totalPrice - amount * price)
    }

    const renewAmount = (id, amount, price)=> {
      setCartProducts(filtAmnt(cartProducts, id, amount))
      setTotalAmount(totalAmount + amount);
      setTotalPrice(totalPrice + amount * price)
    }

    const filtCart = (array, prod)=>{ //if the products is in the cart increese the quantity
        for (let i = 0; i < array.length; i++) {
          if(prod.id === array[i].id){
            array[i].amount += prod.amount
          };
        }
        return array
    }

    const filtAmnt = (array, id, amount)=>{ //add or remove units of the added productos 
      for (let i = 0; i < array.length; i++) {
        if(id === array[i].id){
          array[i].amount += amount
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
        renewAmount
    }
    
    return(
        <CartContext.Provider value={data}>
          {children}
        </CartContext.Provider> 
    )
}

export default CartProvider;
export {CartContext};