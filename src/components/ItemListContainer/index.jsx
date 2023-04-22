
import { useParams } from 'react-router-dom'
import { useDelayFetch } from '../../hooks'
import { URL_BASE, URL_ENDPOINTS } from '../../constants/services'
import { Loader, ItemList, SectionTitle } from '../../components'
import './styles.css'

const ItemListContainer = () => {
    
    const { categoryId } = useParams()
    const { loading, data } = useDelayFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`)

    let requested = []

    categoryId ? (
        requested = data.filter(prod => prod.category === categoryId)
    ) : (
        requested = data.filter(prod => prod.outstanding === true)
    )

    return (
        <section className='products__container'>
            {loading ? (
                categoryId ? (
                    <Loader greeting={`Cargando ${categoryId}`} />
                ) : (
                    <Loader greeting={`Bienvenido`} />
                )
            ) : (
                <>
                    <SectionTitle section={categoryId ? categoryId : 'Productos Destacados' } />
                    <ItemList data={requested} />
                </>
            )}
        </section>
    )
}

export default ItemListContainer