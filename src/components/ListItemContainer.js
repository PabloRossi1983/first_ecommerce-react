import Item from "./Item"
import "./Styles/ListItemContainer.css"


const ListItemContainer = ({greeting}) => {
    return(
      <div className="section">
          <h2 className="title">{greeting}</h2>
          <Item title="producto 1"  price="500" description="tarrito loco" img={'aceite-bergamota.jpeg'} />
          <Item title="producto 2"  price="400" description="tarrito grande" img={'aceite-bergamota.jpeg'} />
          <Item title="producto 3"  price="300" description="tarrito bueno" img={'aceite-bergamota.jpeg'} />
          <Item title="producto 4"  price="200" description="tarrito lindo" img={'aceite-bergamota.jpeg'} />
          <Item title="producto 5"  price="200" description="tarrito chico" img={'aceite-bergamota.jpeg'} />
          <Item title="producto 6"  price="200" description="tarrito feo" img={'aceite-bergamota.jpeg'} />
      </div>
    )
}

export default ListItemContainer