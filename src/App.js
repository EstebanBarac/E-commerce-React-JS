import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import CartProvider  from './context/CartContext.jsx';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout/Checkout.jsx';
import PagoTerminado from './components/Checkout/PagoTerminado.jsx';


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDBrIg2M2dXOuFuRlRPfXqohvx7g252Wt4",
    authDomain: "proyecto-react-js-coderhouse.firebaseapp.com",
    projectId: "proyecto-react-js-coderhouse",
    storageBucket: "proyecto-react-js-coderhouse.appspot.com",
    messagingSenderId: "637286009777",
    appId: "1:637286009777:web:ef88ef8d0be1b877b14b90"
  };
  
  initializeApp(firebaseConfig);

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
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/pagoterminado' element={<PagoTerminado />} />
          </Routes>
      </CartProvider>    
    </BrowserRouter>
    </> 
  );
}

export default App;
