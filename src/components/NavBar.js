import Menu from "./Menu"
import Serch from "./Serch"
import "./Styles/NavBar.css";
import Logo from "./Logo";
import CartIcon from './CartIcon';
import CartWidget from  "./CartWidget"
import { useState } from "react";

const NavBar = () => {
  const[showCart, setShowCart] = useState(false)
    return(
        <header className="fixed-top shadow">
          <div  className="container">
            <Logo />
            <Serch />
            <CartIcon showCart={setShowCart}/>
          </div>
          <div className="menu-cont">
            <Menu />
          </div>      
          {showCart && <CartWidget hideCart={setShowCart}/>}
        </header>
    )
}

export default NavBar