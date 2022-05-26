import ItemCount from '../componentes/ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <>
            <h2> Tu tienda digital preferida</h2>
            <ItemList></ItemList>
            <ItemCount stock={5} initial={1} onAdd={1}/>

        </>
    )
}
export default ItemListContainer