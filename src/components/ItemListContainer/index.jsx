import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks'
import { Loader, ItemList, SectionTitle, BackBtn, FowardBtn } from '../../components'
import './styles.css'

const ItemListContainer = () => {
    const scrollContainer = useRef()

    const scrollBack = () => {
        scrollContainer.current.scrollLeft = -366
    }

    const scrollFoward = () => {
        scrollContainer.current.scrollLeft = 400
    }

    const { categoryId } = useParams()
    const { loading, data } = useFirestore('collection')

    return (
        <section className='products__container' ref={scrollContainer}>
            {loading ? (
                categoryId ? (
                    <Loader greeting={`Cargando ${categoryId}`} />
                ) : (
                    <Loader greeting={`Bienvenido`} />
                )
            ) : (
                <>
                    <SectionTitle section={categoryId ? categoryId : 'Productos Destacados' } />
                    <BackBtn scrollBack={scrollBack}/>
                    <ItemList data={data} />
                    <FowardBtn scrollFoward={scrollFoward}/>
                </>
            )}
        </section>
    )
}

export default ItemListContainer