import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Detail from './components/Pages/Detail';
import Categories from './components/Pages/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Item/:id" element={<Detail />}/>
          {/* <Route path='Categories/:categoryId' element={<Categories />}/> */}
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
