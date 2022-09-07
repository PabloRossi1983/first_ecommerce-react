import "./Styles/BurguerButton.css"

const BurguerButton = ({setShowBurguer})=>{
    return(
        <div onClick={()=>setShowBurguer(true)} className="burguer-button-cont">
            <div className="burguer-layer burguer-dark-layer"></div>
            <div className="burguer-layer burguer-ligth-leyer"></div>
            <div className="burguer-layer burguer-dark-layer"></div>
            <div className="burguer-layer burguer-ligth-leyer"></div>
            <div className="burguer-layer burguer-dark-layer"></div>
        </div>
    )
}

export default BurguerButton