import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import CartProvider  from './context/CartContext.jsx';


function App() {

  return (
  <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />  
            <Route path='/category/:idCat' element={<ItemListContainer />} />  
            <Route path='/item/:idProd' element={<ItemDetailContainer />} /> 
            <Route path='/cart' element={<Cart />} /> 
          </Routes>
      </CartProvider>    
    </BrowserRouter>
    </> 
  );
}

export default App;
