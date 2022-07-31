import { Link } from "react-router-dom"
import "./Styles/Logo.css"

const Logo = () => {
    return(
        <div className="logo-cont">
          <Link to={'/'}>
            <img src={"/assets/img/logo_Just.png"} alt="Logo Just" className="one logo-sz" />
          </Link>
          <img src={"/assets/img/logo-Gladys.png"} alt="Logo Gladys" className="one logo-sz" />
          <img src={"/assets/img/Gladys.jpg"} alt="Gladys Capriotti" className="one logo-sz foto-consult" />
        </div>
    )
}

export default Logo