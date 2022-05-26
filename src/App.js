
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from '../src/componentes/NavBar'
import ItemListContainer from '../src/componentes/ItemListContainer'
function App() {
  return (
    <>
    <NavBar> </NavBar> 
    <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;