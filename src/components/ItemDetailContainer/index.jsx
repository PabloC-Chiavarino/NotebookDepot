import { ToastContainer, toast } from 'react-toastify';
import { useFirestore } from '../../hooks'
import { Loader, ItemDetail, MainBtn } from '../../components'
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"

const ItemDetailContainer = () => {
    
    const { loading, data } = useFirestore('unity')

    const throwPopUp = () => {
        toast.success('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    
    return (
        <>  
            <div className='product__Detailcontainer' >
                {loading ? <Loader greeting={'Cargando'}/> : (
                    <>
                        <ItemDetail product={data} onAddPopUp={throwPopUp} />
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