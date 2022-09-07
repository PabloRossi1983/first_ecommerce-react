import "./Styles/MenuItem.css"
import { Link } from "react-router-dom";

const MenuItem = ({data}) => {
    
    return(
        <nav className="nav nav-pills nav-fill nav-cont">
          <Link className="link-no-decoration" to={`Category/${data}`}>
            <button className="nav-item nav-link menu-link-smaller">{data}</button>
          </Link>
        </nav>
    )
}

export default MenuItem