import ItemCount from './components/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';


function App() {

  const onAdd = (count) => {
    alert(`sumaste ${count} productos al carrito`);
  }

  return (
    <>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
        {/* <ItemCount initial={1} stock={9} onAdd ={onAdd}/> */}
    </> 
  );
}

export default App;
