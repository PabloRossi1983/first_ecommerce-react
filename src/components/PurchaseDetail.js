import "./Styles/PurchaseDetail.css"

const PurchaseDetail = ({data})=> {
    const {title, amount, price} = data
    return(
        <div className="purchase-detail-item-cont underline-1rem">
            <p>{`${title} X ${amount}`}</p>
            <p>${price*amount}-</p>
        </div>
    )
}

export default PurchaseDetail