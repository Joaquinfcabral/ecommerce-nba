import React from "react";
import './ItemList.css'

const Item = ({ producto }) => {
    const { name, description, stock, imagen } = producto
    return (
        <div className="card diseñoCarta" style={{ width: '18rem', margin: '.5rem' }}>
            <img src={imagen} className="card-img-top" alt={name} />
            <div className='diseñoTexto'>
                <p className="card-text estiloTexto">{name}</p>
                <p className="card-text estiloTexto">{description}</p>
            </div>
        </div>
    )
}

export default Item