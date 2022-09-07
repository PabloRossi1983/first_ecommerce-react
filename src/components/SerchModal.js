import SerchItem from "./SerchItem";
import "./Styles/SerchModal.css"

const SerchModal = ({data, clearModal, clearBurguerMenu})=> {
    return (
        
        <div className="serch-modal modal-body">
            {data.map((el)=> <SerchItem key={el.id} dataProd={el} clearModal={clearModal} clearBurguerMenu={clearBurguerMenu}/>)}   
        </div>
    )
}

export default SerchModal;