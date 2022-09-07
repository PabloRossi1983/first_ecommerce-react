import Menu from "./Menu"
import Serch from "./Serch"
import "./Styles/NavBar.css";
import Logo from "./Logo";
import CartIcon from './CartIcon';
import CartWidget from  "./CartWidget"
import { useState } from "react";
import useScreenSize from "./Hooks/useScreenSize";
import BurguerButton from "./BurguerButton";
import VerticalMenu from "./VerticalMenu";


const NavBar = () => {
  const {width} = useScreenSize()
  const[showCart, setShowCart] = useState(false)
  const[showBurguer, setShowBurguer] = useState(false)
  
    return(
        <header className="fixed-top shadow">
          <div  className="navbar-container">
            <Logo />
            <div className="serch-component-cont">
              <Serch setShowBurguer={setShowBurguer} />
            </div>
            <div className="carticon-component-cont">
              <CartIcon showCart={setShowCart}/>
              <BurguerButton setShowBurguer={setShowBurguer} showBurguer={showBurguer}/>
            </div>
          </div>
          {showBurguer && width <= 992 ? <VerticalMenu setShowBurguer={setShowBurguer}/> :
          <div className="menu-cont">
            <Menu />
          </div>}      
          {showCart && <CartWidget hideCart={setShowCart}/>}
        </header>
    )
}

export default NavBar