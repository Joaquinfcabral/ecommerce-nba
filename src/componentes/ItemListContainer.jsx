import React from 'react';
import ItemCount from '../componentes/ItemCount'
import ItemList from '../componentes/ItemList'
import customFetch from '../mocks/ApiNba'
import { useEffect, useState } from 'react'
const { productos } = require('../mocks/productos')






const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false)
    
useEffect(() =>{
    customFetch(3000, productos) 
        .then(res => setListaProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setCargando (false))
},[]);


    return (
        <>
            <h2> Bienvenidos a la mejor tienda digital </h2>
             <ItemList listaProductos={listaProductos}/>
            <ItemCount stock={5} initial={1} onAdd={1}/>

        </>
    )
}
export default ItemListContainer