import Menu from "./Menu"
import Serch from "./Serch"
import CartWidget from "./CartWidget"
import "./Styles/NavBar.css";
import Logo from "./Logo";



const NavBar = () => {
    return(
        <header className="fixed-top shadow">
          <div  className="container">
            <Logo />
            <Serch />
            <CartWidget />
          </div>      
          <Menu />
        </header>
    )
}

export default NavBar