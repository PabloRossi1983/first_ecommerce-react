import Item from "./Item"

const ItemList = ({dataProd})=> {
  return(    
    <>
       {dataProd./* filter((el)=> el.category === 'BIENESTAR-FISICO'). */map( (el) => <Item key={el.id} data={el} />)}
    </>
)}

export default ItemList;