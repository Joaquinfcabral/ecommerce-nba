import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from '../src/componentes/NavBar'
import ItemListContainer from '../src/componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';



function App() {

  return (
    <>
    <NavBar /> 
    <ItemListContainer/>
    <ItemDetailContainer/>

    </>
  );
}

export default App;