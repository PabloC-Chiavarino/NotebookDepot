import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDelayFetch } from '../../hooks'
import { URL_BASE, URL_ENDPOINTS } from '../../constants/services'
import { Loader, ItemDetail } from '../../components'
import "./styles.css"

const ItemDetailContainer = () => {
    
    const { loading, data } = useDelayFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`)    
    
    const { productId } = useParams()
    const [ product, setProduct ] = useState({})
    
    useEffect( () => {
            let selected = data.find(prod => prod.id === productId )
            console.log(product)
            setProduct(selected)
    }, [data])
    
    return (
        <>  
            <div className='product__Detailcontainer' >
                {loading ? <Loader greeting={'Cargando'}/> : (
                    <ItemDetail product={product} />
                    )}
            </div>
        </>
    )
}

export default ItemDetailContainer