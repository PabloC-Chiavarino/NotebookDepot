import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


export const throwAddPopUp = () => {
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

export const mailConfirmErr = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El email de confirmacion debe ser igual al ingresado',
    })
} 