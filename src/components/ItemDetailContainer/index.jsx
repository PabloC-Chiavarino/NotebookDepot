import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks'
//import { useDelayFetch } from '../../hooks'
//import { URL_BASE, URL_ENDPOINTS } from '../../constants/services'
import { Loader, ItemDetail, MainBtn } from '../../components'
import "./styles.css"

const ItemDetailContainer = () => {
    
    const { productId } = useParams()
    //const { loading, data } = useDelayFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`)
    //const [ product, setProduct ] = useState({})
    const { loading, data } = useFirestore('unity', productId)
    console.log(data)
    // useEffect( () => {
    //         let selected = data.find(prod => prod.id === productId )
    //         setProduct(selected)
    // }, [data])
    
    return (
        <>  
            <div className='product__Detailcontainer' >
                {loading ? <Loader greeting={'Cargando'}/> : (
                    <>
                        <ItemDetail product={data} />
                        <div className='backBtn--container'>
                            <MainBtn text='Volver' />
                        </div>
                    </>
                    )}
            </div>
        </>
    )
}

export default ItemDetailContainer