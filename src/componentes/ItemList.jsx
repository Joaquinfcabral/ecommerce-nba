import React from "react";
// import Item from "../componentes/Item";



const ItemList = ({ listaProductos }) => {
  console.log("as", listaProductos);
  return (
    <>
      <h3> Listado de Productos </h3>
      <div className="d-flex justify-space-between flex-wrap estiloDeTarjeta">
        <h1>{listaProductos.name}</h1>
        {/* {listaProductos?.map((producto)=><Item key={producto.id} producto={producto} />)} */}
      </div>
    </>
  );
};


export default ItemList;