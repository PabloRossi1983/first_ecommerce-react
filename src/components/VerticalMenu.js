import Serch from "./Serch"
import Menu from "./Menu"
import "./Styles/VerticalMenu.css"


const VerticalMenu = ({setShowBurguer})=> {
    
    return(
      <aside className="vertical-menu-main-cont">
        <div onClick={()=>setShowBurguer(false)} className="x-close-cont">
            <div className=" x-close">X</div>
        </div>
        <div className="vertical-serch-cont">
          <Serch />
        </div>
        <div onClick={()=>setShowBurguer(false)} className="vertical-menu-cont">
          <Menu />
        </div>
      </aside>
    )
}

export default VerticalMenu