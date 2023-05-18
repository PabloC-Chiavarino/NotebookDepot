import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks'
import { Loader, ItemList, SectionTitle } from '../../components'
import './styles.css'

const ItemListContainer = () => {
    
    const { categoryId } = useParams()
    const { loading, data } = useFirestore('collection')

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
                    <ItemList data={data} />
                </>
            )}
        </section>
    )
}

export default ItemListContainer