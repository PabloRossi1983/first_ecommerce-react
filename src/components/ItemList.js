import Item from "./Item"

const ItemList = ({dataProd, cat})=> {
  return(    
    <>
       {cat !== undefined ? 
       dataProd.filter((el) => el.category === cat).map( (el) => <Item key={el.id} data={el} />) :
       dataProd.map( (el) => <Item key={el.id} data={el} />)}
    </>
)}

export default ItemList;