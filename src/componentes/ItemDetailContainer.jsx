import React from 'react';
import ItemDetail from '../componentes/ItemDetail'
import customFetch from '../mocks/ApiNba'
import { useEffect, useState } from 'react'
const { productos } = require('../mocks/productos')


const ItemDetailContainer = () =>{

        const [listaProductos, setListaProductos] = useState([]);
        
        
    useEffect(() =>{
        customFetch(3000, productos [2]) 
            .then(res => setListaProductos(res))
            .catch(err => console.log(err))
    },[]);

    return (
        <ItemDetail item={listaProductos}/>
    )



}



export default ItemDetailContainer