import React from 'react';
import ItemCount from '../componentes/ItemCount'
import ItemList from '../componentes/ItemList'
import {customFetch} from '../mocks/apiNba'
import { useEffect, useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer';





const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false)
    
useEffect(() =>{
    setCargando(true)
    customFetch 
        .then(res => setListaProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setCargando (false))
},[]);

console.log(listaProductos)

    return (
        <>
            <h2> Bienvenidos a la mejor tienda digital </h2>
            {cargando ? <p>Loading...</p> : <ItemList listaProductos={listaProductos}/>}
            <ItemCount stock={5} initial={1} onAdd={1}/>

        </>
    )
}
export default ItemListContainer