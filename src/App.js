import './App.css';
import NavBar from './components/NavBar';
import ListItemContainer from './components/ListItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ListItemContainer greeting="PRODUCTOS BONITOS"/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
