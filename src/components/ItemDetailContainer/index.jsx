import { ToastContainer } from 'react-toastify';
import { useFirestore } from '../../hooks'
import { throwAddPopUp } from '../../constants/utils';
import { Loader, ItemDetail, MainBtn } from '../../components'
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"

const ItemDetailContainer = () => {
    
    const { loading, data } = useFirestore('unity')
    
    return (
        <>  
            <div className='product__Detailcontainer' >
                {loading ? <Loader greeting={'Cargando'}/> : (
                    <>
                        <ItemDetail product={data} onAddPopUp={throwAddPopUp} />
                        <div className='backBtn--container'>
                            <MainBtn text='Volver' />
                        </div>
                    </>
                    )}
                    <ToastContainer />
            </div>
        </>
    )
}

export default ItemDetailContainer