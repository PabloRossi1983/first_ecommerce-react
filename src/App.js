import './App.css';
import NavBar from './components/NavBar';
import ListItemContainer from './components/ListItemContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListItemContainer greeting="PRODUCTOS BONITOS"/>
    </div>
  );
}

export default App;
