import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartWidget } from './components/CartWidget/CartWidget';
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:mouse' element={<ItemListContainer/>} />
          <Route path='/categoria/:teclado' element={<ItemListContainer/>} />
          <Route path='/categoria/:auriculares' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
