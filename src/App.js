import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Detail from './components/Pages/Detail';
import Category from './components/Pages/Category';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Item/:id" element={<Detail />}/>
          <Route path='Category/:categoryId' element={<Category />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
