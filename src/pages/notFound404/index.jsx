import { Link } from 'react-router-dom'
import { MainBtn } from '../../components'
import './styles.css'

const NotFound404 = () => {
    return (
        <div className='default_container'>
            <h1>404 Not Found</h1>
            <h2>Ops!..</h2>
            <h3>La página solicitada no existe.</h3>
            <div className='navigate__options--container'>
                <MainBtn text='Home' />
                <MainBtn text='Volver'/>
            </div>
        </div>
    )
}

export default NotFound404