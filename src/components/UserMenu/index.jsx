import { accountIcon } from '../../assets/icons'
import './styles.css'

const UserMenu = ({show, onClose}) => {
    return (
        <div
            className='userMenu__container' 
            style={{transform: show ? "translate(0)" : "translate(100%)"}}
            >
                <div className='userMenu__close' onClick={onClose}>X</div>
                <div className='userMenu__accountIcon--container'>
                    <img className='userMenu__accountIcon' src={accountIcon} alt="" />
                </div>
                <h2 className='userMenu__info' >Aún no has iniciado sesión</h2>
                <div className='userMenu__options--container'>
                    <button className='userMenu__button'>Iniciar Sesiòn</button>
                    <button className='userMenu__button'>Crear cuenta</button>
                </div>
        </div>
    )
}

export default UserMenu