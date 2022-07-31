import "./Styles/Menu.css"
import { Link } from "react-router-dom";

const MenuItem = ({data, cat}) => {
    
    return(
        <nav className="nav nav-pills nav-fill nav-cont">
          {/* <Link to={`Categories/AROMATERAPIA`}> */}
            <button className="nav-item nav-link menu-link-smaller">{data}</button>
          {/* </Link> */}
        </nav>
    )
}

export default MenuItem