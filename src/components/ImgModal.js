import "./Styles/ImgModal.css"

const ImgModal = ({img, title, show})=>{
    return(
        <div className="img-modal-cont">
          <div className="img-full-cont">
            <div className="img-modal-x-close-cont">
              <div className="x-close" onClick={()=>show(false)}>X</div>
            </div>
            <img className="img-modal" src={`/assets/img/${img}`} alt={title}/>
          </div>
        </div>
    )
}

export default ImgModal