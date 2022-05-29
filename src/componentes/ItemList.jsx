import React from 'react'
import Item from '../componentes/Item'
import './ItemList.css'

const ItemList = ({listaProductos}) =>{
    return(
        <>
        <h3> Listado de Productos </h3>
        <div className='d-flex justify-space-between flex-wrap estiloDeTarjeta'>
        {listaProductos.map((producto)=><Item key={producto.id} producto={producto} />)}
        </div>
        </>
    )
}

export default ItemList