import Item from "./Item"

const ItemList = ({dataProd})=> {
  return(    
    <>
       {dataProd.map( (prod) => <Item key={prod.id} data={prod} />)}
    </>
)}

export default ItemList;