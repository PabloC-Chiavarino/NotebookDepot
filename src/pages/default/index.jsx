import { ItemListContainer, Carousel } from "../../components";
import './styles.css'

const defaultPage = () => {
    return (
        <>
            <Carousel />
            <section className="productsSection">
                <ItemListContainer />
            </section>
        </>
    )
}

export default defaultPage