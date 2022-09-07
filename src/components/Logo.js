import { Link } from "react-router-dom"
import "./Styles/Logo.css"

const Logo = () => {
    return(
        <div className="logo-cont">
          <Link to={'/'}>
              <img src={"/assets/img/logo_Just.png"} alt="Logo Just" className="logo-sz" />
          </Link>
          <img src={"/assets/img/logo-Gladys.png"} alt="Logo Gladys" className="logo-sz" />
        </div>
    )
}

export default Logo