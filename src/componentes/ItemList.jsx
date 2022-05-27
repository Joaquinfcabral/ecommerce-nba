import React from 'react'
import Item from '../componentes/Item'

const ItemList = ({listaProductos}) =>{
    return(
        <>
        <h3> Listado de Productos </h3>
        <div className='d-flex justify-space-between flex-wrap'>
        {listaProductos.map((producto)=><Item key={producto.id} producto={producto} />)}
        </div>
        </>
    )
}

export default ItemList