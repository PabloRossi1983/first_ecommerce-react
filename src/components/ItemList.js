import Item from "./Item"

const ItemList = ({dataProd})=> {
  return(    
    <>
       {dataProd.map( (el) => <Item key={el.id} data={el} />)}
    </>
)}

export default ItemList;