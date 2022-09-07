import "./Styles/PurchaseDetail.css"
import useNumberFormat from "./Hooks/useFormatNumber"

const PurchaseDetail = ({data})=> {
    const {title, amount, price} = data
    return(
        <div className="purchase-detail-item-cont underline-1rem">
            <p>{`${title} X ${useNumberFormat(amount)}`}</p>
            <p>${useNumberFormat(price*amount)}-</p>
        </div>
    )
}

export default PurchaseDetail