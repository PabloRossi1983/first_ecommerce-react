import SerchItem from "./SerchItem";
import "./Styles/SerchModal.css"

const SerchModal = ({data, clearModal})=> {
    return (
        
        <div className="serch-modal modal-body">
            {data.map((el)=> <SerchItem key={el.id} dataProd={el} clearModal={clearModal}/>)}   
        </div>
    )
}

export default SerchModal;