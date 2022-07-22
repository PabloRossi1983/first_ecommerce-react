import Item from "./Item"

const ItemList = ({dataProd, key})=> {
  return(    
    <>
       {dataProd.map( (prod) => <Item key={prod.id} data={prod} />)}
    </>
)}

export default ItemList;