import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import TestEventos from './components/TestEventos.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/testeventos' element={<TestEventos />} />
          <Route path='/' element={<ItemListContainer />} />  
          <Route path='/category/:id' element={<ItemListContainer />} />  
          <Route path='/item/:id' element={<ItemDetailContainer />} /> 
        </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
