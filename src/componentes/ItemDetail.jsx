import React from 'react';
import ItemCount from '../componentes/ItemCount'



const ItemDetail = ({item}) => {
    return (
        <div>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.stock}</p>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ItemCount stock={5} initial={1} onAdd={1}/>
        </div>
    )

}


export default ItemDetail