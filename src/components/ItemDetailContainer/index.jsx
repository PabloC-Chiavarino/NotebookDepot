import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks'
import { Loader, ItemDetail, MainBtn } from '../../components'
import "./styles.css"

const ItemDetailContainer = () => {
    
    const { productId } = useParams()
    const { loading, data } = useFirestore('unity')
    
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