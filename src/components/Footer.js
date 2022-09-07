import Logo from "./Logo"
import "./Styles/Footer.css"

const Footer = ()=> {
    return(
        <div className="footer-main-cont">
            <div className="footer-top-cont">
              <div className="footer-contact-cont">
                <div className="footer-logo-cont">
                    <Logo />
                </div>
                <h6 className="footer-contact"><i className="fa-solid fa-phone"></i> +54 341 3062967</h6>
                <h6 className="footer-contact"><i className="fa-regular fa-envelope"></i> myecommerce@email.com</h6>
              </div>
              <div className="footer-list-cont">
                <div className="footer-list-grid">
                  <p className="footer-list-item footer-link item1 underline-2rem">Quienes somos</p>
                  <p className="footer-list-item footer-link item2 underline-2rem">Contacto</p>
                  <p className="footer-list-item footer-link item3 underline-2rem">Términos y condiciones</p>
                  <p className="footer-list-item footer-link item4 underline-2rem">Preguntas frecuentes</p>
                  <p className="footer-list-item item5">Seguinos!</p>
                  <p className="footer-list-item item6"><i className="fa-brands fa-instagram footer-link"></i> <i className="fa-brands fa-facebook footer-link"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-bottom-cont">
            <p><i className="fa-regular fa-copyright">2022</i> |<b> JUST</b> | Desarrollado por <b>Pablo Rossi Developer</b></p>
            </div>
        </div>
    )
}

export default Footer