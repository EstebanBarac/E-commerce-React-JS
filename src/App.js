import ItemCount from './components/ItemCount.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import  NavBar from './components/NavBar.jsx';


function App() {

  const onAdd = (count) => {
    alert(`sumaste ${count} productos al carrito`);
  }

  return (
    <>
        <NavBar />
        <ItemListContainer greeting={'Buenas Tardes'} />
        <ItemCount initial={1} stock={9} onAdd ={onAdd}/>
    </> 
  );
}

export default App;
