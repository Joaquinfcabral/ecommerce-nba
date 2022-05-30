import { useEffect, useState } from 'react';
import customFetch from '../mocks/apiNba'



const ItemDetailContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false)
    const {id} = useParams();
    useEffect(() =>{

        setCargando(true)
        customFetch
            .then(res => setListaProductos(res))
            .catch(err => console.log(err))
            .finally(()=> setCargando (false))
    
        /*fetch("https://api.mercadolibre.com/sites/MLA/search?q=nba")
        .then(res => res.json())
        .then(res => setListaProductos(res.results))
        .catch(err => console.log(err))*/
    },[]);

    return (
        <>
        <ItemDetail item={listaProductos} />
        </>
    )
}

export default ItemDetailContainer