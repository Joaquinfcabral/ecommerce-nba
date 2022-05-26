import ItemCount from '../componentes/ItemCount'

const ItemListContainer = () => {
    return (
        <>
            <h2> Tu tienda digital preferida</h2>
            <ItemCount stock={5} initial={1} onAdd={1}/>
        </>
    )
}
export default ItemListContainer